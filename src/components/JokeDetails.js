import React, { useEffect } from 'react';

import axios from 'axios';

import { useParams, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getJokes } from '../redux/modules/joke'

function JokeDetails(props) {
  const { category } = useParams();

  const  mainPage = () => {
    props.history.push('/top');
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJokes(category));
  }, [ dispatch, category ]);

  const jokes = useSelector(state => state.nameAtStore.jokes);

  return (
    <div>
      <button className="back-button" onClick={mainPage}>
          {` <<<  back`}
      </button>

      <br />

      <p className="main-content">
        <b>{ category } </b>
        <hr />
          { jokes }
      </p>
    </div>
  );
}

export default withRouter(JokeDetails);

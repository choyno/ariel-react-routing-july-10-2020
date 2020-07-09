import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { useParams, withRouter } from 'react-router-dom';

function JokeDetails(props) {
  const { category } = useParams();
  const [joke, setJoke] = useState('');

  const  mainPage = () => {
    props.history.push('/top');
  }

  useEffect(() =>{
    async function getJoke() {
      let result = await axios({
        method: 'GET',
        url: `https://api.chucknorris.io/jokes/random?category=${category}`
      })

      setJoke(result.data.value);
    }
    getJoke();
  },[ category ]);

  return (
    <div>
      <button className="back-button" onClick={mainPage}>
          {` <<<  back`}
      </button>

      <br />

      <p className="main-content">
        <b>{ category } </b>
        <hr />
          { joke }
      </p>
    </div>
  );
}

export default withRouter(JokeDetails);

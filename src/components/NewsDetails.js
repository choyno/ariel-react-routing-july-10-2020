import React from 'react';

import { useParams, withRouter } from 'react-router-dom';

function NewsDetails(props) {
  const { title } = useParams();

  const  mainPage = () => {
    props.history.push('/news');
  }

  return (
    <div>
      <button className="back-button" onClick={mainPage}>
          {` <<<  back`}
      </button>

      <br />

      <p className="main-content">
          { title }
      </p>
    </div>
  );
}

export default withRouter(NewsDetails);

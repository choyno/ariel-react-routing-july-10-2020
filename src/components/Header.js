import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

export default function Header() {
  const [joke, setJoke] = useState('');

  useEffect(()  => {
    async function getJoke(){
      let result = await axios({
        method: 'GET',
        url: 'https://api.chucknorris.io/jokes/random',
      });
      setJoke(result.data.value);
    }

    getJoke();
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/news">
            News
        </Route>
        <Route path="/about">
            About
        </Route>
        <Route path="/">
            Top
        </Route>
      </Switch>
      <br />

      { joke }
    </div>
  );
}


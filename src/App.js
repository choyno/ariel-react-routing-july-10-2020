import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Top from './components/Top';
import About from './components/About';
import News from './components/News';
import Sidebar from './components/Sidebar';
import NewsDetails from './components/NewsDetails';
import JokeDetails from './components/JokeDetails';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="header">
          <Header />
        </div>

        <div className="content">
          <div className="sidebar">
            <Sidebar />
          </div>

          <div className="main">
            <Switch>
              <Route path="/jokes/category/:category">
                <JokeDetails />
              </Route>
              <Route path="/news/:title">
                <NewsDetails />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/" extact>
                <Top />
              </Route>
            </Switch>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

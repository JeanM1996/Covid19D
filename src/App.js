import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import './App.css';
import {Switch,Redirect} from 'react-router-dom';
import Home from './Components/Home';
import Diagnostico from './Components/Diagnostico';
import About from './Components/About';

import { BrowserRouter } from 'react-router-dom'
import Nav from "./Components/NavBar"
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="menu">
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/diagnostico">Diagnostico</Link> </li>
            <li> <Link to="/about">About</Link> </li>
          </ul>
      </div>
      <div className="App-intro">
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path="/diagnostico" component={Diagnostico} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}


export default App;

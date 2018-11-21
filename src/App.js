import React, { Component } from 'react';

import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Error from './components/pages/Error';
import Navigation from './components/pages/Navigation';



class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Login}  exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route component={Error} />
         
        </Switch>
        </div>
        

      </BrowserRouter>
      /*
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
      
            </a>
          </header>
          <a>dsafasd</a>
          <NameCard name="Watson" number={34567890} isHuman tags={tags} />
          <LikesButton  />
          <DigitalClock />
        <CommentBox />

        
        
        </div>
        */
        
      
    );
  }
}

export default App;

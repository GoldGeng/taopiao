import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './routes/home';
import User from './routes/user';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/user" exact component={User}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

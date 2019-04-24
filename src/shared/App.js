import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../components/login';
import test from '../components/test';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact={true} path={'/login'} component={Login} />
        <Route exact={true} path={'/test'} component={test} />
      </div>
    );
  }
}

export default App;

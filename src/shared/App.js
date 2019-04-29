import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login, Home, tajayeonseub, test } from '../components/index';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact={true} path={'/login'} component={Login} />
        <Route exact={true} path={'/test'} component={test} />
        <Route exact={true} path={'/'} component={Home} />
        <Route exact={true} path={'/tajayeonseub'} component={tajayeonseub} />
      </div>
    );
  }
}

export default App;

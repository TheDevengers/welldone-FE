import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';

import Home from '../Home';
import Login from '../components/Login/Login.js';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" exact component={Login}/>
      <PrivateRoute path="/" redirectRoute="/login" exact component={Home}/>
    </Switch>
  </Router>
);

export default App;
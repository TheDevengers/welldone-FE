import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';

import Home from '../Home';
import Login from '../components/Login/Login.js';
import Signup from '../components/Signup/Signup.js';
import ArticleForm from '../components/ArticleForm';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" exact component={Login}/>
      <Route path="/signup" exact component={ Signup }/>
      <PrivateRoute path="/" redirectRoute="/login" exact component={Home}/>
      <PrivateRoute path="/create-article" exact component={ArticleForm} />
    </Switch>
  </Router>
);

export default App;
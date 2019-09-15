import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Login from '../components/Login/Login.js';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ Home }/>
      <Route path="/login" exact component={ Login }/>
    </Switch>
  </Router>
);

export default App;
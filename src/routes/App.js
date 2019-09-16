import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home'
import Signup from '../components/Signup/Signup.js';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ Home }/>
      <Route path="/signup" exact component={ Signup }/>
    </Switch>
  </Router>
);

export default App;
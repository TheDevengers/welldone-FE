import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home'

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ Home }/>
    </Switch>
  </Router>
);

export default App;
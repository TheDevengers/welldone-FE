import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import { ErrorContext } from '../context/ErrorProvider';

import Login from '../components/Login/Login.js';
import Signup from '../components/Signup/Signup.js';
import ArticleForm from '../components/ArticleForm';
import EditItem from '../components/EditItemForm/Index';
import EditProfile from '../components/UserProfileForm/index';
import { Footer, NoMatch } from '../components/commons';
import Home from '../Home';

const routeWithError = (Component) => (props) => (
  <ErrorContext.Consumer>
    {({ showError }) => (
      <Component handleError={showError} {...props} />
    )}
  </ErrorContext.Consumer>
);

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" exact component={Login}/>
      <Route path="/signup" exact component={Signup}/>
      <PrivateRoute path="/" redirectRoute="/login" exact component={Home}/>
      <PrivateRoute path="/create-article" exact component={routeWithError(ArticleForm)} />
      <PrivateRoute path="/edit-article/:id" exact component={routeWithError(EditItem)} />
      <PrivateRoute path="/edit-profile" exact component={routeWithError(EditProfile)} />
      <PrivateRoute component={NoMatch} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
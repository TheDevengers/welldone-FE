import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';

import Login from '../components/Login/Login.js';
import Signup from '../components/Signup/Signup.js';
import ArticleForm from '../components/ArticleForm';
import EditItem from '../components/EditItemForm/Index';
import UserProfile from '../components/UserProfileForm/index';
import { Footer } from '../components/commons';
import ListItems from '../components/ListItems/ListItems.js';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" exact component={Login}/>
      <Route path="/signup" exact component={Signup}/>
      <PrivateRoute path="/" redirectRoute="/login" exact component={ListItems}/>
      <PrivateRoute path="/create-article" exact component={ArticleForm} />
      <PrivateRoute path="/edit-article/:id" exact component={EditItem} />
      <PrivateRoute path="/edit-profile" exact component={UserProfile} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
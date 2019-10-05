import React, { Component, Fragment } from 'react';
import cookieStorage from '../../persistence/cookieStorage';

import Nav from '../commons/Nav/Nav.js';
import UserProfileForm from './UserProfileForm.js';
import apiUserProfile from '../../utils/apiUserProfile';

const { get } = cookieStorage();
const { getUserInfo } = apiUserProfile();

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userProfileInfo: {},
    };
  }

  componentDidMount() {
    this.setState({ id: get('id') });
    getUserInfo(get('id'))
    .then((userInfo) => this.setState({ userProfileInfo: userInfo }));
  }

  render() {
    const { userProfileInfo } = this.state;
    return(
      <Fragment>
        <Nav />
        <UserProfileForm
          dataUserProfile={userProfileInfo}
        />
      </Fragment>
    );
  }
}

export default UserProfile;

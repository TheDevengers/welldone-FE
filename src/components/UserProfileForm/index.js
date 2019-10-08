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
      profileInfo: {}
    };
  }

  componentDidMount() {
    getUserInfo(get('id'))
    .then((userInfo) => {
      console.log('USERINFO');
      console.log(userInfo);
      this.setState({ userProfileInfo: userInfo, profileInfo: userInfo.profile });
    });
  }

  render() {
    const { userProfileInfo } = this.state;
    const { profileInfo } = this.state;
    
    return(
      <Fragment>
        <Nav />
        <UserProfileForm
          dataUserProfile={userProfileInfo}
          profileInfo = { profileInfo }
        />
      </Fragment>
    );
  }
}

export default UserProfile;

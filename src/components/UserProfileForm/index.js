import React, { Component, Fragment } from 'react';
import cookieStorage from '../../persistence/cookieStorage';

import Nav from '../commons/Nav/Nav.js';
import UserProfileForm from './UserProfileForm.js';
import apiUserProfile from '../../utils/apiUserProfile';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      this.setState({ userProfileInfo: userInfo, profileInfo: userInfo.profile });
    })
    .catch((err) => {
      this.props.handleError(err, () => {
        toast.error('Unable to load profile info', {
          autoClose: false,
          position: toast.POSITION.BOTTOM_CENTER
        });
      });
    });
  }

  render() {
    const { userProfileInfo, profileInfo } = this.state;

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

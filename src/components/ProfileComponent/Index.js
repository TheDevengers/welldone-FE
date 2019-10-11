import React, { Component } from 'react';

import ProfileComponent from './ProfileComponent.js';
import cookieStorage from '../../persistence/cookieStorage';
import apiUserProfile from '../../utils/apiUserProfile';

import { Spinner } from '../commons/index';

const { get } = cookieStorage();
const { getUserInfo } = apiUserProfile();

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profileInfo: {
        profile: {}
      },
      loading: true
    };
  }

  componentDidMount() {
    getUserInfo(get('id'))
    .then((userInfo) => this.setState({ profileInfo: userInfo }))
    .catch((err) => console.log(err))
    .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { profileInfo, loading } = this.state;

    if(loading) {
      return <Spinner />;
    }

    return(
      <ProfileComponent
        profileInfo={profileInfo}
      />
    );
  }
}

export default Profile;
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './profileComponent.module.css';
import Button from '../commons/Button/Button';

const ProfileComponent = ({ profileInfo  }) => (
  <div className={styles.userprofile_container}>
    <div className={styles.up_container}>
      <div className={styles.img_container}>
        <img src="https://avatars2.githubusercontent.com/u/24435223?s=400&u=b024e15a5157673adf007ea2049f96c810dee4c9&v=4"
          alt="profile" />
      </div>
    </div>
    <div className={styles.low_container}>
      <div>
        <h3>{profileInfo.username}</h3>
        <h4>{`${profileInfo.first_name} ${profileInfo.last_name}`}</h4>
      </div>
      <div className={styles.user_description}>
        <p>{profileInfo.profile.description}</p>
      </div>
      <div>
        <Link to='/edit-profile'>
          <Button className={styles.edit_profile_btn}>Edit</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default ProfileComponent;
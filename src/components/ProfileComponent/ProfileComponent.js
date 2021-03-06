import React from 'react';
import { Link } from 'react-router-dom';
import styles from './profileComponent.module.css';
import Button from '../commons/Button/Button';
import defaultUserIcon from '../../assets/default-user.jpg';

const ProfileComponent = ({ profileInfo  }) => (
  <div className={styles.userprofile_container}>
    <div className={styles.up_container}>
      <div className={styles.img_container}>
        <img src={profileInfo.profile && profileInfo.profile.image_user ? profileInfo.profile.image_user : defaultUserIcon}
          alt="profile" />
      </div>
    </div>
    <div className={styles.low_container}>
      <div>
        <h3>{profileInfo.username}</h3>
        <h4 data-cy="profile-name-surname-label">{`${profileInfo.first_name} ${profileInfo.last_name}`}</h4>
      </div>
      <div className={styles.user_description}>
        <p>{profileInfo.profile && profileInfo.profile.description}</p>
      </div>
      <div>
        <Link to='/edit-profile'>
          <Button data-cy="edit-profile-btn" className={styles.edit_profile_btn}>Edit</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default ProfileComponent;
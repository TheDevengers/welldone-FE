import React from 'react';
import styles from './profile.module.css';
import Button from '../commons/Button/Button';

const Profile = () => (
  <div className={styles.profile_container}>
    <div className={styles.up_container}>
      <div className={styles.img_container}>
        <img src="https://avatars2.githubusercontent.com/u/24435223?s=400&u=b024e15a5157673adf007ea2049f96c810dee4c9&v=4"
          alt="profile" />
      </div>
    </div>
    <div className={styles.low_container}>
      <div>
        <h3>bri06</h3>
        <h4>Briam Martínez Escobar</h4>
      </div>
      <div>
        <Button className={styles.edit_profile_btn}>Edit</Button>
      </div>
    </div>
  </div>
);

export default Profile;
import React from 'react';
import styles from './noMatch.module.css';

const NoMatch = () => (
  <div className={styles.error_container}>
    <div className={styles.type_error}>
      <span><span>4</span></span>
      <span>0</span>
      <span><span>4</span></span>
    </div>
    <p>NOT FOUND</p>
  </div>
);

export default NoMatch;
import React from 'react';
import styles from './spinner.module.css';

const Spinner = () => (
  <div className={styles.lds_roller}>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
  </div>
);

export default Spinner;

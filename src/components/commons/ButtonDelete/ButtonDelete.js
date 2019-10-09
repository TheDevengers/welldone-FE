import React from 'react';
import styles from './buttonDelete.module.css';

const ButtonDelete = ({ children, className, ...res }) => (
  <button className={`${ styles.deleteButton } ${ className }`} {...res}>{children}</button>
);

export default ButtonDelete;
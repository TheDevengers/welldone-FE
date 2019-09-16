import React from 'react';
import styles from './button.module.css';

const Button = ({ children, className, ...res }) => (
  <button className={ `${ styles.defaultButton } ${ className }` } { ...res }>{children}</button>
);

export default Button;
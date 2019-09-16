import React from 'react';
import styles from './input.module.css';

const Input = ({ className = '', error, ...res }) => (
  <input className={ `${ className } ${ styles.defaultInput } ${ error ? styles.error : '' }` } { ...res } />
);

export default Input;
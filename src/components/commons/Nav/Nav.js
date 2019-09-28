import React from 'react';
import styles from './nav.module.css';

import { LogoSimple } from '../Logo/LogoSimple';
import { MdAccountCircle, MdExitToApp } from 'react-icons/md';

const SIZE = '48px';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand" href="/"><LogoSimple /></a>

      <ul className="navbar-nav ml-auto">
        <li>
          <a className="nav-link" href="/login" style={{ color: 'green' }}><MdAccountCircle size={SIZE} /></a>
        </li>
        <li>
          <a className="nav-link" href="/logout" style={{ color: 'green' }}><MdExitToApp size={SIZE} /></a>
        </li>
      </ul>

    </nav>
  );
    
};

export default Nav;
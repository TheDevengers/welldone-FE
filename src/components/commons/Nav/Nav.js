import React from 'react';
import { logout } from '../../../persistence/access';

import { LogoSimple } from '../Logo/LogoSimple';
import { MdAccountCircle, MdExitToApp } from 'react-icons/md';
import { TiDocumentAdd } from 'react-icons/ti';

import styles from './nav.module.css';

const SIZE = '38px';

const Nav = () => {
  return (
    <nav className={`${styles.nav} navbar navbar-expand navbar-dark bg-dark`}>
      <a className={`navbar-brand ${styles.logo}`}  href="/"><LogoSimple /></a>
      <ul className={`navbar-nav  ml-auto ${styles.nav_container}`}>
        <li>
          <a className={`nav-link ${styles.icon}`}><MdAccountCircle size={SIZE} /></a>
        </li>
        <li>
          <a className={`nav-link ${styles.icon}`} alt="article" href="/create-article"><TiDocumentAdd size={SIZE} /></a>
        </li>
        <li>
          <a className={`nav-link ${styles.icon}`} onClick={logout}><MdExitToApp size={SIZE} /></a>
        </li>
      </ul>

    </nav>
  );

};

export default Nav;
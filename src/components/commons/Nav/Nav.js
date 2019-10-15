import React from 'react';
import { logout } from '../../../persistence/access';

import { LogoSimple } from '../Logo/LogoSimple';
import { MdAccountCircle, MdExitToApp } from 'react-icons/md';
import { TiDocumentAdd } from 'react-icons/ti';

const SIZE = '38px';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark" style={{ height: '68px' }}>
      <a className="navbar-brand" href="/"><LogoSimple /></a>

      <ul className="navbar-nav ml-auto">
        <li>
          <a className="nav-link" href="/edit-profile" style={{ color: 'green' }}><MdAccountCircle size={SIZE} /></a>
        </li>
        <li>
          <a className="nav-link" alt="article" href="/create-article" style={{ color: 'green' }}><TiDocumentAdd size={SIZE} /></a>
        </li>
        <li>
          <a className="nav-link" onClick={logout} style={{ color: 'green' }}><MdExitToApp size={SIZE} /></a>
        </li>
      </ul>

    </nav>
  );

};

export default Nav;
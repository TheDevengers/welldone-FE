import React from 'react';
import logo from './logo.svg';
import './App.css';
import { logout } from './persistence/access';

function Home() {
  return (
    <div className="App">
      <button onClick={logout}>LOGOUT</button>
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LogoSimple />
        <LogoLarge />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;

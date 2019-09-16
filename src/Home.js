import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LogoSimple } from './components/commons/Logo/LogoSimple';
import { LogoLarge } from './components/commons/Logo/LogoLarge';

function Home() {
  return (
    <div className="App">
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

import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
      <footer className={`${ styles.footer }`}>
        <div className="container">
          <a href="https://fontmeme.com/avengers-infinity-war-font/">
            <img src="https://fontmeme.com/permalink/190926/6b5bbed8e7afcea4640d1766a0cfb743.png" alt="avengers-infinity-war-font" border="0"/>
          </a>
        </div>
      </footer>
    );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

// scss
import './header.scss';

// stateless component
const Header = (() =>
  <header>
    <div className="header-module">
      <Link to="/">Smil</Link>
      <Link to="/libraries">Libraries</Link>
      <Link to="/button">Button</Link>
      <Link to="/splash">Splash</Link>
    </div>
  </header>
);

export default Header;

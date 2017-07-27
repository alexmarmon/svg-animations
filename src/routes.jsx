import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './shared_modules/header/header';
import Smil from './pages/smil/Smil';
import Libraries from './pages/libraries/Libraries';
import Button from './pages/button/Button';
import Splash from './pages/splash/Splash';

// include scss
import './shared_styles/base.scss';

// define routes
const Routes = (() =>
  <BrowserRouter>
    <div id="app-container">
      <Route path="/" component={Header} />
      <Route exact path="/" component={() => <Smil />} />
      <Route path="/libraries" component={() => <Libraries />} />
      <Route path="/button" component={() => <Button />} />
      <Route path="/splash" component={() => <Splash />} />
    </div>
  </BrowserRouter>
);

export default Routes;

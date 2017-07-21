import React, { Component } from 'react';
// import anime from 'animejs';

import './splash.scss';

class Splash extends Component {
  componentDidMount() {
    // run anime.js
    // https://codepen.io/anon/pen/pwXOBb
    // https://tympanus.net/Development/ItemRevealer/index.html
  }

  render = () => (
    <div className="splash-module">
      <svg id="anime" viewBox="0 0 100 100">
        <path fill="#1eb287" d="M 0,0 C 50,0 50,0 100,0 100,50 100,50 100,100 50,100 50,100 0,100 0,50 0,50 0,0 Z" />
      </svg>
    </div>
  )
}

export default Splash;

import React, { Component } from 'react';
// import anime from 'animejs';

import './background.scss';

class Background extends Component {
  componentDidMount() {
    // run anime.js
  }

  render = () => (
    <div id="morphing" className="background-module">
      <svg id="anime" viewBox="0 0 100 100">
        <path fill="#1eb287" d="M 0,0 C 50,0 50,0 100,0 100,50 100,50 100,100 50,100 50,100 0,100 0,50 0,50 0,0 Z" />
      </svg>
    </div>
  )
}

export default Background;

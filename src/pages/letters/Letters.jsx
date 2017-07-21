import React, { Component } from 'react';
// import anime from 'animejs';

import './letters.scss';

class Letters extends Component {
  componentDidMount() {
    // run anime.js
    // https://tympanus.net/Development/FancyLetterAnimation/
  }

  render = () => (
    <div className="letters-module">
      <svg id="anime" viewBox="0 0 100 100">
        <path fill="#1eb287" d="M 0,0 C 50,0 50,0 100,0 100,50 100,50 100,100 50,100 50,100 0,100 0,50 0,50 0,0 Z" />
      </svg>
    </div>
  )
}

export default Letters;

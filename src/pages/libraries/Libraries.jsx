import React, { Component } from 'react';
import anime from 'animejs';

import './libraries.scss';

class Libraries extends Component {
  componentDidMount() {
    this.points = [
      { value: 'M 0,0 C 50,0 50,0 100,0 100,50 100,50 100,100 50,100 50,100 0,100 0,50 0,50 0,0 Z' },
      { value: 'M 50,0 C 75,25 75,25 100,50 75,75 75,75 50,100 25,75 25,75 0,50 25,25 25,25 50,0 Z' },
      { value: 'M 25,50 C 50,0 50,0 50,0 75,50 75,50 100,100 50,100 50,100 0,100 12.5,75 12.5,75 25,50 Z' },
      { value: 'M 50,0 C 77.6,0 100,22.4 100,50 100,77.6 77.6,100 50,100 22.4,100, 0,77.6, 0,50 0,22.4, 22.4,0, 50,0 Z' },
      { value: 'M 100,0 C 100,50 100,50 100,100 50,100 50,100 0,100 0,50 0,50 0,0 50,0 50,0 100,0 Z' },
    ];

    this.fills = [
      { value: '#1eb287' },
      { value: '#ca5f52' },
      { value: '#1ca69e' },
      { value: '#188fc2' },
      { value: '#1eb287' },
    ];

    // run anime.js
    this.setupAnime();

    // run snapsvg
    const element = Snap('#snap path');
    this.runSnapSvg(1, element);
  }

  setupAnime = () => {
    // anime.js
    anime({
      targets: '#morphing #anime path',
      d: this.points,
      fill: this.fills,
      easing: [0.445, 0.05, 0.55, 0.95],
      duration: 5000,
      loop: true,
    });
  }

  runSnapSvg = (count, element) => {
    setTimeout(() => {
      element.animate({ d: this.points[count].value, fill: this.fills[count].value }, 1000, () => [0.445, 0.05, 0.55, 0.95]);
      if (count < 4) {
        this.runSnapSvg(count + 1, element);
      } else {
        this.runSnapSvg(0, element);
      }
    }, 1000);
  }

  render = () => (
    <div id="morphing" className="libraries-module">
      <p>anime.js</p>
      <a target="_blank" rel="noopener noreferrer" href="http://animejs.com/documentation/#morphing">SVG Morphing</a>
      <svg id="anime" viewBox="0 0 100 100">
        <path fill="#1eb287" d="M 0,0 C 50,0 50,0 100,0 100,50 100,50 100,100 50,100 50,100 0,100 0,50 0,50 0,0 Z" />
      </svg>

      <p>snap svg</p>
      <a target="_blank" rel="noopener noreferrer" href="http://snapsvg.io/docs/#Element.animate">Element Animate</a>
      <svg id="snap" viewBox="0 0 100 100">
        <path fill="#1eb287" d="M 0,0 C 50,0 50,0 100,0 100,50 100,50 100,100 50,100 50,100 0,100 0,50 0,50 0,0 Z" />
      </svg>
    </div>
  )
}

export default Libraries;

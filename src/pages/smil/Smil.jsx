import React from 'react';

import './smil.scss';

const Smil = (() =>
  <div className="smil-module">
    <p>Helpful Links:</p>
    <a target="_blank" rel="noopener noreferrer" href="http://easings.net/#easeInOutSine">KeySpline Easing Values</a>
    <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/noahblon/post/an-intro-to-svg-animation-with-smil">Codepen intro to SMIL</a>
    <svg viewBox="0 0 100 100">
      <path fill="#1EB287">
        <animate
          attributeName="d"
          dur="5000ms"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="
            0;
            .25;
            .5;
            .75;
            1"
          keySplines="
            0.445, 0.05, 0.55, 0.95;
            0.445, 0.05, 0.55, 0.95;
            0.445, 0.05, 0.55, 0.95;
            0.445, 0.05, 0.55, 0.95;"
          values="
            M 0,0
            C 50,0 50,0 100,0
            100,50 100,50 100,100
            50,100 50,100 0,100
            0,50 0,50 0,0
            Z;

            M 50,0
            C 75,25 75,25 100,50
            75,75 75,75 50,100
            25,75 25,75 0,50
            25,25 25,25 50,0
            Z;

            M 25,50
            C 50,0 50,0 50,0
            75,50 75,50 100,100
            50,100 50,100 0,100
            12.5,75 12.5,75 25,50
            Z;

            M 50,0
            C 77.6,0 100,22.4 100,50
            100,77.6 77.6,100 50,100
            22.4,100, 0,77.6, 0,50
            0,22.4, 22.4,0, 50,0
            Z;

            M 100,0
            C 100,50 100,50 100,100
            50,100 50,100 0,100
            0,50 0,50 0,0
            50,0 50,0 100,0
            Z;"
        />
        <animate
          attributeName="fill"
          dur="5000ms"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="
            0;
            .25;
            .5;
            .75;
            1"
          keySplines="
            0.445, 0.05, 0.55, 0.95;
            0.445, 0.05, 0.55, 0.95;
            0.445, 0.05, 0.55, 0.95;
            0.445, 0.05, 0.55, 0.95;"
          values="
            #1eb287;
            #ca5f52;
            #1ca69e;
            #188fc2;
            #1eb287;"
        />
      </path>
    </svg>
  </div>
);


export default Smil;

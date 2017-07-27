import React, { Component } from 'react';
import anime from 'animejs';

import './button.scss';

class Button extends Component {
  componentDidMount() {
    this.state = {
      auth: false,
    };

    this.toCircle = anime({
      targets: '#sign-in-path',
      strokeDasharray: '145,600',
      strokeDashoffset: '-410px',
      duration: 700,
      loop: false,
      easing: 'easeInOutSine',
      autoplay: false,
    });

    this.spinCircle = anime({
      targets: '#sign-in-path',
      rotate: -360,
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false,
      loop: true,
    });

    // this needs to be set after the svg is formed into a circle
    this.toCheck = null;
  }

  componentDidUpdate() {
    if (this.state.auth) {
      // pause animation
      this.spinCircle.pause();
      // get remaining animation time
      const timeLeft = this.spinCircle.duration - this.spinCircle.currentTime;
      // add remaining animation time to css
      document.getElementById('sign-in-path').style.transition = `transform ${timeLeft}ms`;
      // add transition back to original spot
      document.getElementById('sign-in-path').classList.add('rotate-back');
      // animate to check
      this.toCheck.play();
    }
  }

  getRequest = () => {
    setTimeout(() => {
      this.setState({ auth: true });
    }, 1500);
  }

  signIn = () => {
    // hide sign in text
    document.getElementById('sign-in-button').classList.add('hide');
    // transition from button to circle
    this.toCircle.play();
    // then rotate circle
    this.toCircle.finished.then(() => this.spinCircle.play());
    // get api request
    this.toCircle.finished.then(() => this.getRequest());
    // create toCheck function
    this.toCircle.finished.then(() => {
      this.toCheck = anime({
        targets: '#sign-in-path',
        strokeDasharray: '135,700',
        strokeDashoffset: '-700px',
        duration: 700,
        loop: false,
        easing: 'easeInOutSine',
        autoplay: false,
      });
    });
  }

  render = () => (
    <div className="button-module">
      <div className="container">
        <div className="input-container">
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" />
        </div>
        <div className="button-container">
          <div className="left-button">
            <svg id="sign-in-svg" width="150" height="56" viewBox="0 0 150 56">
              <path id="sign-in-path" strokeDasharray="400,400" style={{ strokeDashoffset: '0px', transformOrigin: '50% 50%' }} d="M62.2980591,55 L144,55 C147,55 149,53 149,50 L149,5.88671875 C149,3 147,1 144,1 L6,1 C3,1 1,3 1,6 L1,50 C1,53 3,55 6,55 L75,55 C89.9100037,55 102,42.9099998 102,28 C102,13.0900002 89.9100037,1 75,1 C60.0900002,1 48,13.0900002 48,28 C48,42.9099998 60.0899963,55 75,55 C89.9100037,55 102,42.9099998 102,28 C102,13.0900002 89.9100037,1 75,1 C59,2 60,17 64,23 C66.6666667,27 70.3333333,31 75,35 L88,18" fill="none" strokeWidth="1" stroke="#fff" />
            </svg>
            <div id="sign-in-button" className="button" onClick={this.signIn}>Sign In</div>
          </div>
          <div className="right-button">
            <svg id="sign-up-svg" width="150" height="56" viewBox="0 0 150 56">
              <path id="sign-up-path" strokeDasharray="400,400" style={{ strokeDashoffset: '0px', transformOrigin: '50% 50%' }} d="M62.2980591,55 L144,55 C147,55 149,53 149,50 L149,5.88671875 C149,3 147,1 144,1 L6,1 C3,1 1,3 1,6 L1,50 C1,53 3,55 6,55 L75,55 C89.9100037,55 102,42.9099998 102,28 C102,13.0900002 89.9100037,1 75,1 C60.0900002,1 48,13.0900002 48,28 C48,42.9099998 60.0899963,55 75,55 C89.9100037,55 102,42.9099998 102,28 C102,13.0900002 89.9100037,1 75,1 C59,2 60,17 64,23 C66.6666667,27 70.3333333,31 75,35 L88,18" fill="none" strokeWidth="1" stroke="#fff" />
            </svg>
            <div className="button">Sign Up</div>
          </div>
        </div>
        <a>forgot password?</a>
      </div>
    </div>
  )
}

export default Button;

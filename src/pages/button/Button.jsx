import React, { Component } from 'react';
import anime from 'animejs';

import './button.scss';

class Button extends Component {
  componentDidMount() {
    this.state = {
      auth: false,
    };

    this.toCircle = anime({
      targets: '#sign-in-svg path',
      // d: 'M95,69.5 C103.780634,69.5 111.702569,65.9633657 117.178379,59.7935043 C121.885905,54.4893051 124.5,47.5544041 124.5,40 C124.5,31.2836819 121.015252,23.4123512 114.92513,17.9391748 C109.605803,13.1587093 102.618327,10.5 95,10.5 C86.3533483,10.5 78.5369824,13.9289819 73.0674711,19.9330762 C68.207501,25.2680535 65.5,32.3123835 65.5,40 C65.5,47.9055058 68.3638594,55.1276966 73.4767661,60.5067681 C78.9293123,66.2431599 86.5720906,69.5 95,69.5 Z',
      strokeDasharray: '510',
      strokeDashoffset: '-510px',
      duration: 700,
      loop: false,
      easing: 'easeInOutSine',
      autoplay: false,
    });

    this.spinCircle = anime({
      targets: '#sign-in-svg path',
      rotate: -360,
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false,
      loop: true,
    });
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
    }
  }

  getRequest = () => {
    setTimeout(() => {
      this.setState({ auth: true });
    }, 2700);
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
  }

  render = () => (
    <div className="button-module">
      <div className="container">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <div className="button-container">
          <svg id="sign-in-svg" width="190" height="80" viewBox="0 0 190 80">
            <path id="sign-in-path" strokeDasharray="500" style={{ strokeDashoffset: '0px', transformOrigin: '50% 50%' }} d="M76,70 L184,70 C187,70 189,68 189,65 L189,14.8867188 C189,12 187,10 184,10 L6,10 C3,10 1,12 1,15 L1,65 C1,68 3,70 6,70 L95,70 C113,70 125,56 125,40 C125,24 113,10 95,10 C77,10 65,24 65,40 C65,48 67.6666667,55 73,61" fill="none" strokeWidth="1" stroke="#fff" />
          </svg>
          <div id="sign-in-button" className="button" onClick={this.signIn}>Sign In</div>
          <svg id="sign-up-svg" width="190" height="80" viewBox="0 0 190 80">
            <path d="M6,70 L184,70 C187,70 189,68 189,65 L189,14.8867188 C189,12 187,10 184,10 L6,10 C3,10 1,12 1,15 L1,65 C1,68 3,70 6,70 Z" fill="none" strokeWidth="1" stroke="#fff" />
          </svg>
          <div className="button">Sign Up</div>
        </div>
        <a>forgot password?</a>
      </div>
    </div>
  )
}

export default Button;

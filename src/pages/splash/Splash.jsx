import React, { Component } from 'react';
import SVG from 'svg.js';

import './splash.scss';

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById('lofty').classList.add('enter');
    }, 100);

    setTimeout(() => {
      for (let i = 1; i < 5; i += 1) {
        this.animateLeftTree(i, Math.floor(Math.random() * -8) + -12);
        this.animateRightTree(i, Math.floor(Math.random() * -7) + -11);
      }
      this.animateLetters();
    }, 900);

    setTimeout(() => {
      this.hideSplash();
    }, 3000);
  }

  animateLetters = () => {
    const l = SVG.get('#l');
    const o = SVG.get('#o');
    const f = SVG.get('#f');
    const t = SVG.get('#t');
    const y = SVG.get('#y');
    const delay = 150;
    l.animate({ duration: 250, delay: `${delay * 0}` }).dmove(0, -9).loop(2, true);
    o.animate({ duration: 250, delay: `${delay * 1}` }).dmove(0, -9).loop(2, true);
    f.animate({ duration: 250, delay: `${delay * 2}` }).dmove(0, -9).loop(2, true);
    t.animate({ duration: 250, delay: `${delay * 3}` }).dmove(0, -9).loop(2, true);
    y.animate({ duration: 250, delay: `${delay * 4}` }).dmove(0, -9).loop(2, true).after(() => {
      setTimeout(() => {
        this.animateLetters();
      }, 400);
    });
  }

  animateLeftTree = (which, n) => {
    const tree = SVG.get(`#tree1-${which}`);
    tree.animate(1000).rotate(n).dmove(n - 2, 0).loop(2, true)
    .after(() => {
      for (let i = 1; i < 5; i += 1) {
        this.animateLeftTree(i, Math.floor(Math.random() * -8) + -12);
      }
    });
  }

  animateRightTree = (which, n) => {
    const tree = SVG.get(`#tree2-${which}`);
    tree.animate(1000).rotate(n).dmove(n - 2, 0).loop(2, true)
    .after(() => {
      for (let i = 1; i < 5; i += 1) {
        this.animateRightTree(i, Math.floor(Math.random() * -8) + -12);
      }
    });
  }

  hideSplash = () => {
    document.getElementById('splash-module').classList.add('leave');
    document.getElementById('lofty').classList.add('leave');
  }

  render = () => (
    <div id="splash-module" className="splash-module">
      <svg id="lofty" width="603px" height="592px" viewBox="0 0 603 592" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Lofty_1-01" fillRule="nonzero">
            <path d="M294.57,591 C281.756159,591.019131 269.092164,588.244723 257.46,582.87 L147.22,532.17 C143.66,532.34 140.1,532.43 136.59,532.43 C89.23,532.43 45.93,517.11 4.23,485.58 L0.23,482.58 L0.23,310.26 L9.46,317.26 L9.46,309.26 L25.09,319.9 C36.6141268,327.787801 48.9188467,334.469612 61.81,339.84 L51,168.4 C50.85,166.03 50.79,163.64 50.83,161.28 C50.87,158.92 51,156.59 51.22,154.28 C51.36,152.75 51.55,151.21 51.78,149.68 C52.2271016,146.650685 52.8312488,143.646638 53.59,140.68 C53.7766667,139.946667 53.9733333,139.216667 54.18,138.49 C55.0009762,135.595921 55.968898,132.745558 57.08,129.95 C57.9,127.88 58.82,125.82 59.8,123.81 C61.1,121.16 62.55,118.54 64.11,116.02 C64.5,115.39 64.9,114.77 65.3,114.15 C66.91,111.69 68.67,109.28 70.52,106.99 C71.44,105.84 72.41,104.71 73.38,103.62 C74.85,101.98 76.38,100.37 77.98,98.84 C78.51,98.33 79.04,97.84 79.59,97.33 C80.68,96.33 81.8,95.33 82.92,94.42 C83.49,93.94 84.07,93.48 84.64,93.02 C90.4671234,88.4093726 96.8504467,84.5491419 103.64,81.53 L105.71,80.65 C116.455785,76.2257497 127.969125,73.9658999 139.59,74 L250.13,74 L292.21,0.23 L335.31,74 L448.73,74 C452.669281,73.9987581 456.604399,74.2559772 460.51,74.77 C462.03,74.97 463.58,75.22 465.1,75.5 C470.347195,76.4793064 475.494894,77.9319083 480.48,79.84 C482.58,80.64 484.67,81.54 486.69,82.5 C490.056951,84.0965584 493.320069,85.9034641 496.46,87.91 C497.7,88.7 498.94,89.54 500.14,90.4 C500.74,90.8266667 501.336667,91.2633333 501.93,91.71 C503.1,92.59 504.27,93.51 505.41,94.46 C506.55,95.41 507.66,96.37 508.74,97.37 C513.616217,101.872406 517.97637,106.903352 521.74,112.37 C533.136355,128.749511 538.617005,148.520764 537.28,168.43 L530.37,277.43 C551.00152,283.921376 570.549794,293.452845 588.37,305.71 L592.74,308.71 L592.74,318.59 C594.51,319.87 596.27,321.16 598,322.47 L602,325.47 L602,497.71 L586,485.59 C564.53,469.36 542.12,457.65 519.22,450.68 C518.313664,457.633299 516.584896,464.454383 514.07,471 C513.716667,471.92 513.346667,472.836667 512.96,473.75 C509.1138,482.826606 503.780627,491.198132 497.18,498.52 C495.85,499.99 494.47,501.43 493.07,502.78 C491.67,504.13 490.19,505.48 488.69,506.78 C487.19,508.08 485.62,509.3 484.02,510.48 C482.42,511.66 480.75,512.81 479.08,513.88 C478.24,514.42 477.386667,514.946667 476.52,515.46 C474.79,516.46 473,517.46 471.21,518.37 C470.31,518.823333 469.396667,519.266667 468.47,519.7 L331.84,582.83 C320.189426,588.228149 307.50039,591.01646 294.66,591 L294.57,591 Z" id="Shape" fill="#651951" />
            <path d="M464.28,510.58 L327.64,573.75 C306.709121,583.428741 282.588442,583.450668 261.64,573.81 L124.16,510.55 C97.8581357,498.447823 80.3139702,472.89378 78.47,444 L61,167.76 C59.6249093,146.050595 67.2874869,124.738802 82.1717484,108.875387 C97.0560099,93.011973 117.83709,84.0089572 139.59,84 L448.73,84 C470.488125,84.0006738 491.277134,93.0000733 506.167984,108.864454 C521.058835,124.728835 528.725418,146.045392 527.35,167.76 L509.85,444.06 C508.018074,472.915803 490.526147,498.449333 464.28,510.58 Z" id="badge" fill="#65C5B4" />
            <path d="M448.73,84 L139.59,84 C117.83709,84.0089572 97.0560099,93.011973 82.1717484,108.875387 C67.2874869,124.738802 59.6249093,146.050595 61,167.76 L78.47,444 C80.299697,472.90849 97.8460651,498.481102 124.16,510.59 L261.65,573.85 C282.598442,583.490668 306.719121,583.468741 327.65,573.79 L464.29,510.62 C490.535273,498.484857 508.023534,472.947236 509.85,444.09 L527.36,167.8 C528.747049,146.076965 521.084287,124.748147 506.18995,108.874493 C491.295614,93.0008397 470.497272,83.9972081 448.73,84 Z M501.52,186 L486,431.7 C484.375175,457.362307 468.821058,480.071624 445.48,490.86 L323.93,547 C305.319835,555.603217 283.874799,555.62149 265.25,547.05 L143,490.82 C119.601075,480.053966 103.99783,457.315396 102.37,431.61 L86.81,186 C85.5864385,166.69099 92.403514,147.735769 105.644794,133.62891 C118.886074,119.52205 137.372262,111.51994 156.72,111.52 L431.61,111.52 C450.957738,111.51994 469.443926,119.52205 482.685206,133.62891 C495.926486,147.735769 502.743561,166.69099 501.52,186 Z" id="inner-badge" fill="#F06933" />
            <polygon id="mountain-background" fill="#651951" points="292.31 20.23 395.65 197.08 498.98 373.93 294.16 374.99 89.34 376.06 190.83 198.15" />
            <polygon id="mountian" fill="#F06933" points="292.55 42.4 382.97 197.15 473.39 351.9 294.16 352.83 114.93 353.76 203.74 198.08" />
            <rect id="tree2-base" fill="#651951" x="415.75" y="340.17" width="24" height="74" />
            <polygon id="tree2-1" fill="#651951" points="427.75 166.26 449.36 203.69 470.97 241.13 427.75 241.13 384.52 241.13 406.13 203.69" />
            <polygon id="tree2-2" fill="#651951" points="427.75 187.49 455 234.69 482.25 281.89 427.75 281.89 373.25 281.89 400.5 234.69" />
            <polygon id="tree2-3" fill="#651951" points="427.75 214.43 458.5 267.69 489.25 320.95 427.75 320.95 366.25 320.95 397 267.69" />
            <polygon id="tree2-4" fill="#651951" points="427.75 234.4 464 297.19 500.25 359.98 427.75 359.98 355.25 359.98 391.5 297.19" />
            <rect id="tree1-base" fill="#651951" x="148.58" y="340.17" width="24" height="74" />
            <polygon id="tree1-1" fill="#651951" points="160.58 166.26 182.19 203.69 203.8 241.13 160.58 241.13 117.35 241.13 138.97 203.69" />
            <polygon id="tree1-2" fill="#651951" points="160.58 187.49 187.83 234.69 215.08 281.89 160.58 281.89 106.08 281.89 133.33 234.69" />
            <polygon id="tree1-3" fill="#651951" points="160.58 214.43 191.33 267.69 222.08 320.95 160.58 320.95 99.08 320.95 129.83 267.69" />
            <polygon id="tree1-4" fill="#651951" points="160.58 234.4 196.83 297.19 233.08 359.98 160.58 359.98 88.08 359.98 124.33 297.19" />
            <path d="M98.42,442.08 L494.42,428.58 L462.92,499.08 C462.92,499.08 308.55,573.92 302.48,571 C296.41,568.08 153.92,509.58 153.92,509.58 L93.92,458.58 L98.42,442.08 Z" id="chinFill" fill="#651951" />
            <path d="M493.53,372 C492.26,371.59 491.02,371.1 489.81,370.59 L485.93,431.74 C484.305175,457.402307 468.751058,480.111624 445.41,490.9 L323.92,547 C305.309835,555.603217 283.864799,555.62149 265.24,547.05 L143,490.82 C119.601075,480.053966 103.99783,457.315396 102.37,431.61 L97.91,361.15 C91.69,368.38 83.06,373.76 74.26,377.39 L78.46,444 C80.289697,472.90849 97.8360651,498.481102 124.15,510.59 L261.64,573.85 C282.588442,583.490668 306.709121,583.468741 327.64,573.79 L464.28,510.62 C490.525273,498.484857 508.013534,472.947236 509.84,444.09 L514.09,376.99 C507.010478,376.458522 500.065507,374.772948 493.53,372 Z" id="chin" fill="#F06933" />
            <path d="M592.06,477.61 C544.49,441.61 492.38,426.28 433.13,435.29 C387.3,442.29 343.89,460.4 301.13,477.61 C258.37,494.82 215,513 169.2,519.93 C109.97,528.93 57.87,513.59 10.27,477.61 C10.27,428.523333 10.27,379.436667 10.27,330.35 C57.87,366.35 109.97,381.67 169.2,372.67 C215.03,365.67 258.45,347.56 301.2,330.35 C343.95,313.14 387.29,295 433.13,288 C492.38,279 544.49,294.36 592.06,330.32 C592.06,379.44 592.06,428.536667 592.06,477.61 Z" id="wave2" fill="#DBC49F" />
            <path d="M582.82,456.48 C490.29,393.48 396.18,425.36 301.16,463.59 C206.14,501.82 111.96,533.59 19.5,470.7 C19.5,423.173333 19.5,375.646667 19.5,328.12 C112,391.05 206.18,359.21 301.16,321 C396.14,282.79 490.29,250.91 582.82,313.89 C582.82,361.423333 582.82,408.953333 582.82,456.48 Z" id="wave1" fill="#F7ECB6" />
            <path d="M155.53,396.13 C157.91,395.91 159.1,396.97 159.1,399.35 L159.1,455 C159.1,457.26 160.41,458.44 162.67,458.16 C171.591567,457.146033 180.448932,455.630299 189.2,453.62 C191.58,453.1 192.77,454.01 192.77,456.39 L192.77,469.71 C192.941539,471.88742 191.367875,473.813726 189.2,474.08 C173.750722,477.540801 158.019854,479.595855 142.2,480.22 C141.234803,480.352374 140.262505,480.03214 139.564882,479.352104 C138.867258,478.672068 138.522309,477.708262 138.63,476.74 L138.63,400.62 C138.63,398.24 139.94,397.04 142.2,396.96 C147.54,396.79 150.2,396.62 155.53,396.13 Z" id="l" fill="#651951" />
            <path d="M258.67,425.92 C258.59,444.78 246.11,459.18 228.81,465.34 C212.05,471.34 198.56,462.72 198.95,445.05 L198.95,415.32 C199.01,396.98 212.35,383.32 228.81,377.8 C244.66,372.48 259.32,378.23 258.67,396.19 L258.67,425.92 Z M238.21,409.86 C238.21,400.7 237.62,395.39 228.81,398.25 C220,401.11 219.41,406.79 219.41,415.95 L219.41,433.08 C219.41,442.24 220.01,447.74 228.81,444.88 C237.61,442.02 238.21,436.15 238.21,426.99 L238.21,409.86 Z" id="o" fill="#651951" />
            <path d="M325.1,343.46 C327.48,342.513333 328.67,343.23 328.67,345.61 L328.67,358.93 C328.71657,361.20273 327.264721,363.236132 325.1,363.93 C315.1,367.93 305.1,371.95 295.1,375.99 C292.943393,376.694952 291.496548,378.721346 291.53,380.99 L291.53,384.8 C291.53,387.06 292.84,387.8 295.1,386.93 L314.75,379 C317.13,378.04 318.32,378.753333 318.32,381.14 L318.32,394.46 C318.356703,396.729668 316.908621,398.757793 314.75,399.46 L295.12,407.38 C292.963393,408.084952 291.516548,410.111346 291.55,412.38 L291.55,436.65 C291.589972,438.920685 290.140645,440.950556 287.98,441.65 C282.37,443.9 279.56,445.01 273.98,447.21 C271.72,448.09 270.41,447.29 270.41,445.03 L270.41,368.9 C270.349998,366.62314 271.807011,364.582505 273.98,363.9 C291,357.2 308,350.29 325.1,343.46 Z" id="f" fill="#651951" />
            <path d="M356.69,355 C356.69,352.62 355.5,351.86 353.12,352.74 C346.46,355.19 343.12,356.46 336.47,359.05 C334.21,359.93 332.9,359.13 332.9,356.87 L332.9,343.56 C332.839998,341.28314 334.297011,339.242505 336.47,338.56 C356.56,330.89 376.72,323.8 397.38,317.78 C399.76,317.12 400.95,318 400.95,320.38 L400.95,333.7 C401.04995,335.889065 399.530889,337.820868 397.38,338.24 C390.72,340.08 387.38,341.08 380.73,343.24 C378.570007,343.765748 377.077936,345.738458 377.16,347.96 L377.16,403.63 C377.228506,405.851592 375.744142,407.822428 373.59,408.37 C368.26,410.14 365.59,411.07 360.27,412.97 C358.01,413.78 356.7,412.97 356.7,410.69 L356.69,355 Z" id="t" fill="#651951" />
            <path d="M424.26,311.45 C426.26,311.06 427.59,311.66 428.26,313.45 C431.78,321.67 433.54,325.8 437.06,334.14 C437.54,335.14 438.25,335.04 438.73,333.9 C442.25,324.55 444.01,319.9 447.53,310.69 C448.047167,308.892111 449.660505,307.629674 451.53,307.56 C458.33,306.96 461.74,306.78 468.53,306.7 C471.27,306.7 472.46,308.35 471.27,310.85 C464.07,327.01 456.973333,343.21 449.98,359.45 C449.78715,359.907753 449.704926,360.404522 449.74,360.9 L449.74,387.43 C449.832397,388.436273 449.498806,389.435207 448.820297,390.184038 C448.141788,390.932869 447.180482,391.363036 446.17,391.37 C439.51,392.11 436.17,392.59 429.52,393.76 C427.26,394.16 425.95,393.1 425.95,390.84 L425.95,364.28 C425.989999,363.807015 425.907337,363.331709 425.71,362.9 C418.676667,348.586667 411.54,334.323333 404.3,320.11 C403.11,317.92 404.3,315.93 407.04,315.25 C414,313.55 417.41,312.78 424.26,311.45 Z" id="y" fill="#651951" />
            <path d="M598.09,322.38 C596.36,321.07 594.6,319.77 592.83,318.5 L592.83,308.62 L588.46,305.62 C570.639794,293.362845 551.09152,283.831376 530.46,277.34 L537.37,168.34 C538.707005,148.430764 533.226355,128.659511 521.83,112.28 C518.06637,106.813352 513.706217,101.782406 508.83,97.28 C507.75,96.28 506.62,95.28 505.5,94.37 C504.38,93.46 503.2,92.5 502.02,91.62 C501.426667,91.1733333 500.83,90.7366667 500.23,90.31 C499.02,89.45 497.78,88.61 496.55,87.82 C493.410069,85.8134641 490.146951,84.0065584 486.78,82.41 C484.78,81.41 482.66,80.56 480.57,79.75 C475.584894,77.8419083 470.437195,76.3893064 465.19,75.41 C463.67,75.13 462.12,74.88 460.6,74.68 C456.694399,74.1659772 452.759281,73.9087581 448.82,73.91 L335.31,73.91 L292.21,0.14 L291.67,591 C292.67,591 293.6,591.05 294.58,591.05 C307.511881,591.060194 320.200986,588.265041 331.85,582.86 L468.49,519.69 C469.416667,519.263333 470.33,518.82 471.23,518.36 C473.02,517.45 474.81,516.48 476.54,515.45 C477.4,514.936667 478.253333,514.41 479.1,513.87 C480.77,512.8 482.43,511.66 484.04,510.47 C485.65,509.28 487.2,508.05 488.71,506.77 C490.22,505.49 491.71,504.15 493.09,502.77 C494.47,501.39 495.87,499.98 497.2,498.51 C503.807732,491.189613 509.147718,482.818001 513,473.74 C513.386667,472.833333 513.756667,471.916667 514.11,470.99 C516.630962,464.448438 518.366439,457.630733 519.28,450.68 C542.18,457.68 564.59,469.37 586.06,485.59 L602.06,497.71 L602.06,325.38 L598.09,322.38 Z" id="maskLayer" fill="#651951" opacity="0.19" style={{ mixBlendMode: 'multiply' }} />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Splash;

webpackJsonp([0],{203:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,u=n(5),s=n.n(u),c=n(7),_=n.n(c),f=n(88),p=(n.n(f),n(87)),i=n(204),m=(n.n(i),Object(f.observer)(l=function(e){function t(){var e,n,a,l;o(this,t);for(var u=arguments.length,c=Array(u),_=0;_<u;_++)c[_]=arguments[_];return n=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.fetchData=function(){a.props.appState.fetchData("api/users")},a.render=function(){var e=a.props.appState;return s.a.createElement("div",{className:"user-module"},s.a.createElement("button",{onClick:a.fetchData},"Get User"),s.a.createElement("p",null,""+e.fullName),s.a.createElement("p",null,""+e.user.phone))},l=n,r(a,l)}return a(t,e),t}(u.Component))||l);m.propTypes={appState:_.a.instanceOf(p.a)};var d=m;t.a=d;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(m,"User","/Users/alex/Code/_lofty/react-mobx-template/src/shared_modules/user/user.jsx"),__REACT_HOT_LOADER__.register(d,"default","/Users/alex/Code/_lofty/react-mobx-template/src/shared_modules/user/user.jsx"))}()},204:function(e,t){},205:function(e,t,n){e.exports=n(206)},206:function(e,t,n){e.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=n(5)},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(3),a=o(r),l=n(5),u=o(l);e.exports={Component1:a.default,Component2:u.default}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o);n(4);var a=function(){return r.default.createElement("div",null,r.default.createElement("h3",null,"Component1"))},l=a;t.default=l,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"Component1","/Users/alex/Code/_lofty/lofty-npm-template/src/components/component1/component1.jsx"),__REACT_HOT_LOADER__.register(l,"default","/Users/alex/Code/_lofty/lofty-npm-template/src/components/component1/component1.jsx"))}()},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o);n(6);var a=function(){return r.default.createElement("div",null,r.default.createElement("h3",null,"Component2"))},l=a;t.default=l,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(a,"Component2","/Users/alex/Code/_lofty/lofty-npm-template/src/components/component2/component2.jsx"),__REACT_HOT_LOADER__.register(l,"default","/Users/alex/Code/_lofty/lofty-npm-template/src/components/component2/component2.jsx"))}()},function(e,t){}])},207:function(e,t){},209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),r=n.n(o),a=n(207),l=(n.n(a),function(){return r.a.createElement("div",{className:"title-module"},r.a.createElement("img",{src:"/static/windTurbine.svg",alt:"wind turbine"}),r.a.createElement("h2",null,"React MobX Template"),r.a.createElement("h3",null,"A simple start."),r.a.createElement("h3",null,"Home Page"))}),u=l,s=u,c=(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"Title","/Users/alex/Code/_lofty/react-mobx-template/src/pages/home/modules/title/title.jsx"),__REACT_HOT_LOADER__.register(u,"default","/Users/alex/Code/_lofty/react-mobx-template/src/pages/home/modules/title/title.jsx"))}(),n(5)),_=n.n(c),f=n(7),p=n.n(f),i=n(87),m=n(205),d=(n.n(m),n(203)),E=function(e){var t=e.appState;return _.a.createElement("div",null,_.a.createElement(s,null),_.a.createElement(m.Component1,null),_.a.createElement(d.a,{appState:t}))};E.propTypes={appState:p.a.instanceOf(i.a)};var O=E;t.default=O;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(E,"Home","/Users/alex/Code/_lofty/react-mobx-template/src/pages/home/Home.jsx"),__REACT_HOT_LOADER__.register(O,"default","/Users/alex/Code/_lofty/react-mobx-template/src/pages/home/Home.jsx"))}()}});
//# sourceMappingURL=0.js.map
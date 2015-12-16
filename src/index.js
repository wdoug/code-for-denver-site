import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

// Site javascript dependencies
window.jQuery = window.$ = require('jquery');
require('jquery.easing');


import Home from './components/home/index';

ReactDOM.render(<Home />, document.getElementById('site'));

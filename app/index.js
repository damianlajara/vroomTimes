import React from 'react';
import { render } from 'react-dom';
import App from './src/containers/app.jsx';

import 'expose?$!expose?jQuery!jquery'

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './src/styles/main.scss';

render(<App />, document.getElementById('main-app'));

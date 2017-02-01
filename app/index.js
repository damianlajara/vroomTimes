import React from 'react';
import { render } from 'react-dom';
import App from './src/containers/app.jsx';

import 'react-select/dist/react-select.css';
import 'codemirror/lib/codemirror.css';
import './src/styles/main.scss';

render(<App />, document.getElementById('main-app'));

// Comment out following polyfills if you don't need IE11 support
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import './index.css';


import App from './App';

ReactDOM.render(
    <>
    <App></App>

    </>
   ,
    document.getElementById("root")
);


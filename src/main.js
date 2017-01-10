import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './Hello.js';

document.addEventListener('DOMContentLoaded', () =>{
    ReactDOM.render(
        React.createElement(Hello),
        document.getElementById('mount')
    );
});
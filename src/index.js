import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
    <App title="Is hot loading still working? HUH?"/>,
    document.getElementById('app')
);

module.hot.accept();
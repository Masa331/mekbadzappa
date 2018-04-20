import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

root = document.getElementById('root');
ReactDOM.render(<App fok={root.dataset['fok']}/>, root);
registerServiceWorker();

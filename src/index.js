import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MiniEcommerce from './mini-ecommerce';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<MiniEcommerce />, document.getElementById('root'));

serviceWorker.unregister();

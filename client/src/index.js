import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './index.scss';
import App from './App';


import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { store, persistor} from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <PersistGate persistor={persistor} >
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>
 , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


import React from 'react';
import { Provider } from 'react-redux';
import {render} from 'react-dom';
import App from './app/app';
import store from './store';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
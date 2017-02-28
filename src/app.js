import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Players } from './components';
import {store} from './store';

render(
    <Provider store={store}>
        <Players />
    </Provider>
    ,
    document.getElementById('app')
);
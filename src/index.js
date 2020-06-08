import * as React from "react";
import ReactDOM from 'react-dom';
import AppLayout from './components/Applayout/AppLayout';
import getAppStore from './store/store';

import './styles/styles.scss';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = getAppStore();

ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            <AppLayout />
     </BrowserRouter>
    </Provider>,

window.document.getElementById('root')
);

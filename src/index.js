import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom' //不用hash码地址
import {Provider} from 'react-redux' //方便传递store
import store from './store/store';
import './mock/mockServer.js'


import App from './App'

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

), document.getElementById('root'));

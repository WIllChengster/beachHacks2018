import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './components/app';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import promise from './middleware/promise'


const store = createStore(rootReducer, {}, applyMiddleware(promise))

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
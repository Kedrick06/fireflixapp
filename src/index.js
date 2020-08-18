import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './Components/Homepage';
import {Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Contact from './Components/Contact'


const rootReducer = combineReducers({
  form: formReducer
 })

 const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
    <Route path="/Home" component={Homepage}/>
    <Route path="/Contact" component={Contact}/>
    <Route path="/" component={App}/>
    </Switch>
    </BrowserRouter>
    <App />
  </Provider>,



  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

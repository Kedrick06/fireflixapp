import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Homepage from './Components/Homepage';

ReactDOM.render(
<BrowserRouter>
<div>
  <Route component={App} />
  <Route path='/Home' component={Homepage}/>

</div>
</BrowserRouter>,


  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, {Fragment} from 'react';
import './App.css';
import Display from './Components/Display'
import Banner from './Components/Banner'
import Navlogo from './Components/Navlogo'
import Navlink from './Components/Navlink'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Contact from './Components/Contact'


function App() {
  return (
    <div className="App">
     <Fragment>
       <BrowserRouter>
      <Navlink />
      <Navlogo />
      <Banner />
      <Display />
      <Switch>
      <Route path="/Contact" component={Contact}/>
      </Switch>
      </BrowserRouter>
    </Fragment>
    </div>
  );
}

export default App;

import React, {Fragment} from 'react';
import './App.css';
import Display from './Components/Display'
import Banner from './Components/Banner'
import Navlogo from './Components/Navlogo'
import Navlink from './Components/Navlink'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Contact from './Components/Contact'
import Homepage from './Components/Homepage';


function App() {
  return (
    <div className="App">
      <Navlink />
      <Navlogo />
      <Homepage />

    </div>
  );
}

export default App;

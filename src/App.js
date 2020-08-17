import React, {Fragment} from 'react';
import './App.css';
import Display from './Components/Display'
import Banner from './Components/Banner'
import Navlogo from './Components/Navlogo'
import Navlink from './Components/Navlink'


function App() {
  return (
    <div className="App">
     <Fragment>
    <Navlink />
    <Navlogo />
    <Banner />
    <Display />
    </Fragment>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Display from './Components/Display'
import Banner from './Components/Banner'
import Nav from './Components/Nav'


function App() {
  return (
    <div className="App">
    <Nav />
    <Banner />
    <Display />
    </div>
  );
}

export default App;

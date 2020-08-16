import React from 'react';
import './App.css';
import Row from './Components/Row'

function App() {
  return (
    <div className="App">
    <h1> Welcome to FireFlix</h1>
    <Row title="FireFlix Originals" />
    <Row title="Trending Now" />
    </div>
  );
}

export default App;

import React from 'react';
import Row from './Components/Row'
import requests from './Requests';


function Display() {
  return (
    <div className="App">
    <h1> Welcome to FireFlix</h1>
    <Row title="FireFlix Originals" fetchUrl={requests.fetchNetflixOriginals} />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default Display;
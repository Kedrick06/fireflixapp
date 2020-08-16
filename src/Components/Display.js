import React from 'react';
import Row from './Row'
import requests from './requests';


function Display() {
  return (
    <div className="App">
    
    <Row title="FireFlix Originals" fetchUrl={requests.fetchNetflixOriginals} />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default Display;
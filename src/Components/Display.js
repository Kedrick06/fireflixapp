import React from 'react';
import Row from './Row'
import requests from './requests';


function Display() {
  return (
    <div className="App">
    
    <Row title="FireFlix Originals" fetchUrl={requests.fetchFireflixOriginals} />
    
    <Row title="Trending" fetchUrl={requests.fetchTrending} />
    
    </div>
  );
}

export default Display;
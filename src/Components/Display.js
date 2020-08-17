import React from 'react';
import Row from './Row'
import requests from './requests';
import Banner from './Banner';


function Display() {
  return (

    /**Fetching the data to display for the user */
    <div className="App">
    
    <Row title="FireFlix Originals" fetchUrl={requests.fetchFireflixOriginals} isLargeRow />
    
    <Row title="Trending" fetchUrl={requests.fetchTrending} />

    <Row title= "Top Rated" fetchUrl={requests.fetchTopRated} />

    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

    <Row title="Comedy Movies" fetchUrl={requests.fetComedyMovies} />

    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    
    </div>
  );
}

export default Display;
import React, { Component, useState, useEffect } from 'react';
import Axios from './Axios';
import requests from './requests';
import './Banner.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';



function Banner(){

    
        const [movie, setMovie] = useState([]);
        const [trailerUrl, setTrailerUrl] = useState("");
        const opts = {
            height:"390",
            width:"100%",
                playerVars: {
                    autoplay:1,
                },
            };
        useEffect (()  => {
            async function fetchData() {
                const request = await Axios.get(requests.fetchFireflixOriginals);

                setMovie(
                    /**I want to grab random content */
                    request.data.results[Math.floor(Math.random() * request.data.results.length)]
                );
                return request;
            }

            fetchData();
        }, []);


        const handleClick = (movie) => {
            if (trailerUrl) {
                setTrailerUrl('');
            } else {
                movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams= new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
            }
        }


        return(
            <header className="banner-top"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: "center center;",
                    
                }}>
                <div className="banner-contents">
                    <h1 className="banner-title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="banner-buttons">
                        <button className="banner-button" onClick={() => handleClick(movie)}>Play With Fire</button>
                        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

                    </div>
                    <h1 className="banner-description">
                        {movie?.overview}
                    </h1>
                    <div className="banner-fade">
                    </div>
                    
                </div>
            </header>
        )
    }

export default Banner;
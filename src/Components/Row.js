import React, {useState, useEffect} from 'react'
import axios from './Axios';
import "./Row.css";
import Images from './Images'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original/";


function Row ({title, fetchUrl, isLargeRow}) {

    const [movie, setMovies] = useState ([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    //**When this loads I want to make a request from TMBD */

    useEffect(() => {
        // if an array run only once
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
            fetchData();
    }, [fetchUrl]);


   

    /**I'm setting the size of the video */
    const opts = {
        height:"390",
        width:"100%",
            playerVars: {
                autoplay:1,
            },
        };

    /** Using a hanleclick to pass through the trailer on to my images. */
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
            <div className="row-movie">
                <h3>{title}</h3>



                <div className="row-posters">
                    {movie.map((movie) => (
                        /**Creating it to where upon clicking on an image a youtube video pops up with a trailer. */
                        <img
                         key={movie.id}
                         onClick={() => handleClick(movie)}
                         className={`poster-movie ${isLargeRow && "poster-movieLarge"}`} 
                         src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                         alt={movie.name}/>
                    ))}
                </div>
                <div>
                    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                </div>
                <h1 className="banner-description">
                        {movie?.overview}
                    </h1>
           
             </div>

        

        );


    }



export default Row;
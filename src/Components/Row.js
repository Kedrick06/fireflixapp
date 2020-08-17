import React, {useState, useEffect} from 'react'
import axios from './Axios';
import "./Row.css";
import Images from './Images'


const base_url = "https://image.tmdb.org/t/p/original/";


function Row ({title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] = useState ([]);

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






        return(    
            <div className="row-movie">
                <h3>{title}</h3>



                <div className="row-posters">
                    {movies.map(movie => (

                        <img
                         key={movie.id}
                         className="poster-movie" 
                         src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                         alt={movie.name}/>
                    ))}
                </div>

            </div>
        

        )


    }



export default Row;
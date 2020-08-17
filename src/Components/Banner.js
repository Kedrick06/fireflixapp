import React, { Component, useState, useEffect } from 'react';
import Axios from './Axios';
import requests from './requests';


class Banner extends Component{

    render(){
        const [movie, setMovie] = useState([]);

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




        return(
            <header>

            </header>
        )
    }
}
export default Banner;
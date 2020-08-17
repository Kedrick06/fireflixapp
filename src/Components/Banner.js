import React, { Component, useState, useEffect } from 'react';
import Axios from './Axios';
import requests from './requests';


class Banner extends Component{

    render(){
        const [movie, setMovie] = useState([]);

        useEffect (()  => {
            async function fetchData() {

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
import React, {Component} from 'react';
import Banner from './Banner'
import Display from './Display'
import {NavLink} from 'react-router-dom';

class Homepage extends Component {


    render(){
    return(
        <div className="App">
        <NavLink to= '/Home' activeClassName="active-nav">Homepage</NavLink>
        <NavLink to= '/Contact'>Contact</NavLink>
        <Banner />
        <Display />
        </div>

    );
}
}


export default Homepage;
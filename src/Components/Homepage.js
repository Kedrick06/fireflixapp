import React, {Component, Fragment} from 'react';
import Banner from './Banner'
import Display from './Display'
import {NavLink} from 'react-router-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


class Homepage extends Component {


    render(){
    return(
        <Fragment>
        <div className="App">
        <BrowserRouter>
        <Switch>
        <NavLink to= '/' activeClassName="active-nav">Homepage</NavLink>
        <NavLink to= '/Contact'>Contact</NavLink>
        </Switch>
        <Banner />
        <Display />
        </BrowserRouter>
        </div>
        </Fragment>
    );
}
}


export default Homepage;
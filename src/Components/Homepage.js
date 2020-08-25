import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {BrowserRouter, Switch} from 'react-router-dom'
import Contact from './Contact'


class Homepage extends Component {


    render(){
    return(
        <Fragment>
        <div className="App">
        <BrowserRouter>
        <Switch>
        <NavLink to= '/' activeClassName="active-nav">Homepage</NavLink>
        <NavLink to= '/Contact'>{Contact}</NavLink>
        </Switch>
        
        </BrowserRouter>
        </div>
        </Fragment>
    );
}
}


export default Homepage;
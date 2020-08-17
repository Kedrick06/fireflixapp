import React from 'react';
import '../App.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="nav-content">
                <img className="nav-logo"
                src="https://toppng.com/uploads/preview/transparent-flame-logo-flame-logo-115630004981ut5wwx6kt.png"
                alt="FireFlix Logo"/>
            </div>
        )
    }

}

export default Nav;
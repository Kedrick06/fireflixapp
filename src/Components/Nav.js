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
                src="https://www.pinclipart.com/picdir/big/122-1223559_flames-clipart-revival-transparent-background-fire-png.png"
                alt="FireFlix Logo"/>
            </div>
        )
    }

}

export default Nav;
import React from "react";
import Homepage from "./Homepage";

function Navlink(){
    
    return(
        <nav className="nav-list">
            <ul>
                <li>
                 <a href="/">{Homepage} Home</a>
                </li>
                <br></br>
                <li>
                    <a href="/Contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}


export default Navlink;

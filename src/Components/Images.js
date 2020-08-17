import React, {Component} from "react";



class Images extends Component {
render() {

    const base_url= "https://image.tmdb.org/t/p/original/";
    return(
        <div>
            {base_url}
        </div>
    )

}
}

export default Images;
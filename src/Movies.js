import React, {Component} from "react";
import JSON from './db.json';
import Moviesdetails from "./Moviesdetails";

const url="http://localhost:4800/movies";

class Movies extends Component{
    constructor(){
        super();
        this.state={
            title: 'Movie Details',
            movies: JSON
        }
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((response) => response.json())
            .then((data)=>{
              this.setState({
                movies:data
                })
             })

    }
    render(){
        return(
            <div>
                <center>
                    <h2>{this.state.title}</h2>
                </center>
                <Moviesdetails movie={this.state.movies} />
            </div>
        )
    }
}
export default Movies;
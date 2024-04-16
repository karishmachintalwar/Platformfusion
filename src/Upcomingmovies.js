import React, {Component} from "react";
import JSON from './upcomingmovies.json'
import Upcomingmovielist from "./Upcomingmovielist";

const url="http://3.17.216.66:4000/upcomingMovies";

class Upcomingmovies extends Component{
    constructor(){
        super();
        this.state={
            title: 'Upcoming Movies',
            upcomingMovies: JSON
        }
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((response) => response.json())
            .then((data)=>{
              this.setState({
                upcomingMovies:data
                })
             })

    }
    render(){
        return(
            <div>
                <center>
                    <h2 className='nav-link'>{this.state.title}</h2>
                </center>
                <Upcomingmovielist upcominglist={this.state.upcomingMovies} />
            </div>
        )
    }
}
export default Upcomingmovies;
import React, {Component} from "react";
import JSON from './latestmovies.json'
import Movieslist from "./Movieslist";

const url="http://3.17.216.66:4000/latest";

class Latestmovies extends Component{
    constructor(){
        super();
        this.state={
            title: 'Latest Movies',
            latest: JSON
        }
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((response) => response.json())
            .then((data)=>{
              this.setState({
                    latest:data
                })
             })

    }
    render(){
        return(
            <div>
                <center>
                    <h2 className='nav-link'>{this.state.title}</h2>
                </center>
                <Movieslist movielist={this.state.latest} />
            </div>
        )
    }
}
export default Latestmovies;
import React, {Component} from "react";
import JSON from './events.json'
import Eventlist from "./Eventlist";


const url="http://3.17.216.66:4000/events";

class Events extends Component{
    constructor(){
        super();
        this.state={
            title: 'Events',
            events: JSON
        }
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((response) => response.json())
            .then((data)=>{
              this.setState({
                events:data
                })
             })

    }
    render(){
        return(
            <div>
                <center>
                    <h2 className='nav-link'>{this.state.title}</h2>
                </center>
                <Eventlist event={this.state.events} />
            </div>
        )
    }
}
export default Events;
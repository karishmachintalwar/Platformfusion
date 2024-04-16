import React from "react";
import './Movies.css';
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

class Bookingpage extends React.Component{
    constructor(){
        super()
        this.state=({
            date:'',
            time:''
        })
    }
    selectDate = (e) => {
        this.setState({date:e})
  }
  handleTimeChange = (e) => {
         this.setState({time:e})
  }
render(){
  return (
    <div>
            <div className="container ">
                <ul className="list-group list-group-flush datetime">
                <DatePicker selected={this.state.date} 
                dateFormat="dd-MM-yyyy; hh:mm a" 
                onChange={this.selectDate} 
                showTimeSelect timeIntervals={30}
                timeFormat="hh:mm a"></DatePicker>
                <li className="list-group-item btn-primary"><Link to='/Seatbooking' >Choose Number of Seats</Link></li>
                <li className="list-group-item btn-primary"><Link to=''>Book Now</Link></li>
                </ul>
            </div>
        </div>
    );
  } 
}

export default Bookingpage;
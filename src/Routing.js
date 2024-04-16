import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import './Movies.css';
import Latestmovies from './Latestmovies';
import Home from './Home';
import Upcomingmovies from './Upcomingmovies';
import Events from './Events';
import Bookingpage from './Bookingpage';
import Seatbooking from './Seatbooking';
import Moviesdetails from './Moviesdetails';

class Routing extends React.Component{
    constructor(){
        super();
        this.state={
            details:''
        }
    }
    render(){
        return(
           <BrowserRouter>
           <nav className="navbar navbar-inverse container-fluid">
            <a className="navbar-brand" href='#'>Platform Fusion</a>  
            <div className='topnav-right'>
            <form className='form-inline'>
                <input className="form-control" type='Search' placeholder='Search'/>  
                <button className="btn">Search</button>
            </form>
            </div>
           </nav>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path="/latest" element={<Latestmovies/>} />
                <Route exact path="/latest/:_id" element={<Latestmovies/>}/>
                <Route exact path="/upcomingMovies" element={<Upcomingmovies/>}/>
                <Route exact path="/events" element={<Events/>}/>
                <Route exact path="/Moviesdetails" Component={Moviesdetails}/>
                <Route exact path='/Bookingpage' Component={Bookingpage}/>
                <Route exact path='/Seatbooking' Component={Seatbooking}/>
            </Routes>
           </BrowserRouter>

          
        )
    }
}
export default Routing;
import React from "react";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Home extends React.Component{
    constructor(){
        super();
        this.state={
            title: 'Home Page',
        }
    }
    render(){
        return(
    <div>
            <div className='container-fluid'>
                    <button type='button' className='col-lg-4 col-md-4 col-12 details'>
                        <li><Link to='/latest' className='nav-link'>Latest Movies</Link></li>
                    </button>
                    <button type='button' className='col-lg-4 col-md-4 col-12 details'>
                        <li><Link to='/upcomingMovies' className='nav-link'>Upcoming Movies</Link></li>
                    </button>
                    <button type='button' className='col-lg-4 col-md-4 col-12 details'>
                        <li><Link to='/events' className='nav-link'>Events</Link></li>
                    </button>

            </div>
            <Carousel autoPlay interval="5000" transitionTime="5000" showThumbs={false}>
                    <div className='item'>
                        <img src='https://c4.wallpaperflare.com/wallpaper/611/726/386/neytiri-seze-avatar-4k-wallpaper-preview.jpg' />
                    </div>
                    <div className='item'>
                        <img src='https://wallpaperbat.com/img/52548-aquaman-movie-poster-hd-movies-4k-wallpaper-image.jpg' />
                    </div>
                    <div className='item'>
                        <img src='https://c4.wallpaperflare.com/wallpaper/275/717/310/avengers-infinity-war-superheroes-cast-4k-8k-wallpaper-preview.jpg' />
                    </div>
                </Carousel>
                <div>
                <h3 className='heading'>Recommended Movies</h3>
            </div>
            <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-3 col-md-3 col-12'>
                    <div className='card'>
                         <a href=" "><img src="https://cdn.moviefone.com/admin-uploads/posters/insideout2-movie-poster_1699557843.jpg?d=360x540&q=60" alt=""/></a>
                        <div className='card-body'>
                        <h5 className="card-title">Inside Out 2</h5>
                        <li><Link to='/Bookingpage'>Book Now</Link></li>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-12'>
                    <div className='card'>
                       <a href=" "><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/4526/1534526-v-ebf6f46b5514" alt=""/></a>
                        <div className='card-body'>
                            <h5 className="card-title"> Avatar The Way of Water </h5>
                            <li><Link to='/Bookingpage'>Book Now</Link></li>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-12'>
                    <div className='card'>
                        <a href=""><img src="https://cdn.marvel.com/content/1x/guardiansofthegalaxyvolume3_lob_crd_03.jpg" alt=""/></a>
                        <div className='card-body'>
                        <h5 className="card-title"> Guardians of the Galaxy Volume 3</h5>
                        <li><Link to='/Bookingpage'>Book Now</Link></li>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-12'>
                    <div className='card'>
                       <a href=""> <img src="https://upload.wikimedia.org/wikipedia/en/4/4a/Aquaman_and_the_Lost_Kingdom_poster.jpg" alt=""/></a>
                        <div className='card-body'>
                        <h5 className="card-title"> Aquaman and the Lost Kingdom </h5>
                        <li><Link to='/Bookingpage'>Book Now</Link></li>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Home;
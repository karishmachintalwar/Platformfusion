import React from 'react';

const Upcomingmoviedetails = (moviesdata) => {

    const renderData =({moviesdata}) => {

        if(moviesdata) {
            return (
                <div>
                    <div className='col-md-6'>
                        <h2>{moviesdata.name}</h2>
                        <img src={moviesdata.imageUrl} className='img-responsive' />
                    </div>
                    <div className='col-md-6'>
                        <p>{moviesdata.duration}</p>
                    </div>
                    <div className='col-md-6'>
                        <p>{moviesdata.rate}</p>
                    </div>
                    <div className='card-footer'>
                               <a href='#'> Book Now</a>
                        </div>
                </div>
            )
        }
    }

};

export default Upcomingmoviedetails;
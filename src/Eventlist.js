import React,{Component} from "react";
import { Link } from "react-router-dom";

const Eventlist= (event) => {

    const renderlist= ({event}) => {
          if(event){
            return event.map((data)=>{
                return(
                    <Link key={data._id} to={'/upcomingMovies/${data._id}'}>
                          <div className='card col-lg-4 col-md-4 col-12'>
                            <div className='row'>
                             <div className='card-img'>
                                 <img className="card-img-top" src={data.imageUrl} alt={data.name} />
                          </div>
                          <hr />
                          <span className="topTemp">{data.name}</span>
                          </div>
                          <div className="card-body">
                            <span className="max">{data.language}</span>
                            <div className="rate">{data.rate}</div>
                           <div className="card-title">{data.type}</div>
                          </div>
                    </div>
                    </Link>
                )

            });

          }
        
    }
    return(
        <div className="container">
            <div className="row">
                {renderlist(event)}
            </div>
        </div>
    )
};
 
export default Eventlist;
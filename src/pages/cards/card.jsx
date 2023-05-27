import React from "react";
import './card.css';
import { getImage, getRating, getRuntime, getdate, getgenres } from "../func.js";
import { Link } from "react-router-dom";
import IdSetter from "../../features/counter/IdSetter";
import { useDispatch } from "react-redux";
import { setIt } from "../../features/counter/IdSetter";

 

export const Card = (props) => {

  const dispatch=useDispatch();
//  console.log(props.data.show);

 const {id,genres,language,image,name,rating,runtime,schedule,premiered,countryname}=props.data.show;
 

 function nam(i){
  
  dispatch(setIt(i));
   
 }

  return (
    <div className="card-container" id={id}>
      <div className="image-container">
        <img src={getImage(image)} alt="" />
      </div>

      <div className="card-content">

      <div className="card-title">
        <Link to='/tv-shows/details' onClick={nam(id)}><h3>{name}</h3></Link>
      </div>

      <div className="card-body">
        <div>Language :{language}</div>
        <div>Genres :{getgenres(genres)}</div>
        <div>Rating :{getRating(rating)}</div>
        <div>Premiered :{getdate(premiered)}</div>
        <div>Countryname :{countryname}</div>
        <div>Runtime:{getRuntime(runtime)} hrs</div>
      </div>



      </div>

      
    </div>
  );
};

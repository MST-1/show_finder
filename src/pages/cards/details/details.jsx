import React, { useEffect } from 'react'
import './details.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const URL='https://api.tvmaze.com/shows/'

export const Details = () => {
    

    const id=useSelector(state=>state.IdSetter.value);
    const [showData, setShowData] = useState(null);

console.log(id);
    
     
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShowData(data))
      .catch(error => console.log(error));
  }, []);
    
    if (!showData) {
        return <div>Loading...</div>;
      }
  return (
    <div className="container">
    <h1>{showData.name}</h1>
    <div className="image-container">
      <img src={showData.image.medium} alt={showData.name} />
    </div>
    <div className="details">
      <h2>Summary</h2>
      <div dangerouslySetInnerHTML={{ __html: showData.summary }}></div>
      <h2>Genres</h2>
      <ul>
        {showData.genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <h2>Network</h2>
      <p>{showData.network ? showData.network.name : 'N/A'}</p>
    </div>
  </div>
  )
}

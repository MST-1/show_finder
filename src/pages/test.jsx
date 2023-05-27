import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Card } from './cards/card.jsx';
import '../pages/test.css'


export const Test = () => {
  const data=useSelector(state=>state.APIfetcher.value);
  
  const arr=[1,2,1,2,2,2,11];


  
  return (

    

    <div className='main'>
      
    {/* <Card/> */}


    {data.map((e)=>{
      return  <Card data={e}/>
    })}
    
     
      </div>
    

  )
};



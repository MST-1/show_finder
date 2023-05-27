

import { Test } from "./pages/test.jsx";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { increment } from "./features/counter/counterSlice.js";
import { Rout } from "./routes/routes.jsx";






const API="https://api.tvmaze.com/search/shows?q=avengers";


function App() {
  
  const dispatch=useDispatch();

  const fetchdata=async(URL)=>{
    try{
     const res=await axios.get(URL);
     const products=await res.data;
     await dispatch(increment(products));
    //  console.log(dataApi);
     
    }
    catch(err){
      console.log(err);
    }
    
  }


  useEffect(()=>{fetchdata(API)},[]);

  


  return (
         <Rout/>

  )
}

export default App;

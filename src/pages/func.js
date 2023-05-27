import React from 'react'

export const getImage = (url) => {
 
    if(url==null){
        return "https://tse4.mm.bing.net/th?id=OIP.5ef7PaVk-AEN4AFpc36UpAEsC7&pid=Api&P=0&h=180";
    }
    else{
     return url.medium;

    }

};

export const getgenres = (gen) => {
 
    if(gen===[]){
        return "null"
    }
    else{
     return gen.map((e,index)=>{
        if(index==0){
            return e;
        }
        return " ,"+e ;
     });

    }

};
export const getRating = (gen) => {
 
    if(gen.average==null){
        return "Null";
    }
    else{
     return gen.average;

    }

};

export const getdate = (gen) => {
 
    const formattedPremiered = new Date(gen).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });

      return formattedPremiered;
};

export const getRuntime = (gen) => {
 
    if(gen==null){
        return 0;
    }
    else{
     return gen;

    }

};











import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { Test } from '../pages/test.jsx';
import { Details } from '../pages/cards/details/details.jsx';

export const Rout = () => {
  return (<Routes>
<Route path="/" element={<Test/>}/>
<Route path="/tv-shows" element={<Test/>}/>
<Route path="/tv-shows/details" element={<Details/>}/>
</Routes>
  )
}

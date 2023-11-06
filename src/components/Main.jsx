import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Results from './Results';


const Main = () => {
  return (
    <div className='mainContainer'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/search' />} />
          <Route path='/search' element={<Results/>} />
          <Route path='/images' element={<Results/>} />
          <Route path='/news' element={<Results/>} />
          <Route path='/videos' element={<Results/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;

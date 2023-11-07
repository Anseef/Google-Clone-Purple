import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SearchMain from './components/SearchMain';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='/search' element={<SearchMain/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

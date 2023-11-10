import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SearchMain from './components/SearchMain';

function App() {
  const pathPrefix = '/Google-Clone-Purple';

  return (
    <div className='App'>
      <BrowserRouter basename={pathPrefix}>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path='/search' element={<SearchMain />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

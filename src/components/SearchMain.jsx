import React from 'react'
import Navbar from './Navbar';
import Results from './Results';
import Footer from './Footer';
const SearchMain = () => {
  return (
    <div className="searchMainContainer flex">
        <Navbar/>
        <Results/>
        <Footer/>
    </div>
  )
}

export default SearchMain
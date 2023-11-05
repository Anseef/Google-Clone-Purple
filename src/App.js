import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
function App() {
  const [ darkTheme, setDarkTheme ] = useState(false);
  return (
    <div className='App'>
      <Navbar darkTheme = { darkTheme } setDarkTheme = { setDarkTheme }/>
      <Main/>
      <Footer/>
    </div>
  );
}
export default App;

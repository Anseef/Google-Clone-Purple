import React, { useState } from 'react';
import ModeSwitcher from './ModeSwitcher';
import InputField from './inputField';
import { useResultContext } from './ResultContextProvider';
import { useNavigate } from 'react-router-dom';

const Home = ({ darkTheme, setDarkTheme }) => {
  const { setSearchTerm } = useResultContext();
  const [searchTerm, setSearchTermLocal] = useState('');
  const navigate = useNavigate();

  const searchResult = () => {
    setSearchTerm(searchTerm);
    if(searchTerm !== ''){
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className='homeContainer flex'>
      <ModeSwitcher darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <h1 className="mainHeader">Google</h1>
      <InputField searchTerm={searchTerm} setSearchTerm={setSearchTermLocal} />
      <div className="buttonDiv flex">
        <button className="search" onClick={searchResult}>Google Search</button>
        <button className="search">I'm Feeling Lucky</button>
      </div>
    </div>
  );
};

export default Home;

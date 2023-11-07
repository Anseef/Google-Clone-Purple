import React from 'react';
import ModeSwitcher from './ModeSwitcher';
import InputField from './inputField';
import { useResultContext } from './ResultContextProvider';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ darkTheme, setDarkTheme }) => {
  const { searchTerm, setSearchTerm } = useResultContext();

  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };
  const navigate = useNavigate();

  const handleSearch = () => {
    if(searchTerm !== ''){
      navigate(`/search?query=${searchTerm}`);
    }
  };


  return (
    <section className="navbarContainer flex container">
      <Link to="/" className='logoDiv'>
        <h1>Google</h1>
      </Link>
      <div className="searchContainer flex">
        <InputField
          searchTerm={searchTerm}
          setSearchTerm={handleSearchTermChange}
        />
        <button className="searchBtn" onClick={handleSearch}>Search</button>
      </div>
      <ModeSwitcher darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    </section>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { RiToggleLine, RiToggleFill } from 'react-icons/ri';
import Search from './Search';

const Navbar = ({ darkTheme, setDarkTheme }) => {
  const [mode, setMode] = useState("dark");

  const handleModeToggle = () => {
    setDarkTheme(!darkTheme);
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
    console.log(darkTheme);
  };

  return (
    <section className="navbarContainer flex container">
      <a href="/" className="logoDiv">
        <h1>Google</h1>
      </a>
      <Search />

      <div className="modeContainer flex">
        <span>Light</span>
        <button className="modeSwitcher grid" onClick={handleModeToggle}>
          {mode === "dark" ? <RiToggleLine /> : <RiToggleFill />}
        </button>
        <span>Dark</span>
      </div>

    </section>
  );
};
export default Navbar;
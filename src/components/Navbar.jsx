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
    <section className="NavbarContainer">
      <a href="/" className="logoDiv">
        <span>GoogleXPurple</span>
      </a>

      <Search />

      <div className="modeContainer">
        <span>Light</span>
        <button className="modeSwitcher" onClick={handleModeToggle}>
          {mode === "dark" ? <RiToggleLine /> : <RiToggleFill />}
        </button>
        <span>Dark</span>
      </div>

    </section>
  );
};
export default Navbar;
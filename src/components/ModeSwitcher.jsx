import React, { useState, useEffect } from 'react';
import { MdOutlineDarkMode, MdLightMode } from 'react-icons/md';

const ModeSwitcher = () => {
  const storedMode = localStorage.getItem('mode') || "dark";
  const [mode, setMode] = useState(storedMode);
  const [darkTheme, setDarkTheme] = useState(storedMode === "dark");

  const setTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
  };

  useEffect(() => {
    setTheme(mode);
    localStorage.setItem('mode', mode);
  }, [mode]);

  const handleModeToggle = () => {
    setDarkTheme(!darkTheme);
    setMode(darkTheme ? "light" : "dark");
  };

  return (
    <div className="modeContainer flex">
      <button className="modeSwitcher grid" onClick={handleModeToggle}>
        {mode === "light" ? <MdLightMode /> : <MdOutlineDarkMode />}
      </button>
    </div>
  );
};

export default ModeSwitcher;

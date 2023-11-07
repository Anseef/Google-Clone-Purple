import React, { useState } from 'react';
import { RiToggleLine, RiToggleFill } from 'react-icons/ri';

const ModeSwitcher = () => {
  const [mode, setMode] = useState("dark");
  const [ darkTheme, setDarkTheme ] = useState(false);
  const handleModeToggle = () => {
    setDarkTheme(!darkTheme);
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
    console.log(darkTheme);
  };

  return (
    <div className="modeContainer flex">
      <span>Light</span>
      <button className="modeSwitcher grid" onClick={handleModeToggle}>
        {mode === "dark" ? <RiToggleLine /> : <RiToggleFill />}
      </button>
      <span>Dark</span>
    </div>
  );
};
export default ModeSwitcher;
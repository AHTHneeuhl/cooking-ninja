import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/mode-icon.svg";

import "./ThemeSelector.css";

const themeColors = ["#58249c", "#249c6b", "#b70233"];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleHandler = () => {
    changeMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className='theme-selector'>
      <div className='mode-toggle'>
        <img
          src={modeIcon}
          alt='Mode Icon'
          onClick={toggleHandler}
          style={{ filter: mode === "light" ? "invert(25%)" : "invert(100%)" }}
        />
      </div>
      <div className='theme-buttons'>
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;

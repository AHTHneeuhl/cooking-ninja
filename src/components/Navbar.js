import { Link } from "react-router-dom";

import SearchBar from "./Searchbar";
import { useTheme } from "../hooks/useTheme";
import "./Navbar.css";

const Navbar = () => {
  const { color, changeColor } = useTheme();

  return (
    <div className='navbar' style={{ backgroundColor: color }}>
      <nav onClick={() => changeColor("pink")}>
        <Link className='brand' to='/'>
          <h2>Cooking Ninja</h2>
        </Link>
        <SearchBar />
        <Link to='/create'>Create A Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;

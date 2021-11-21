import { Link } from "react-router-dom";

import SearchBar from "./Searchbar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
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

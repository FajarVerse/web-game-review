import { Search } from "react-feather";
import "../../style/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          Quest<span>ForGame</span>
        </h1>
      </div>
      <div className="navbar-menu">
        <div className="navbar-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
        <div className="navbar-eks">
          <a href="">
            <Search />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import { NavLink } from "react-router-dom";

import "./Navbar.css";
import Logo from "../assets/images/momosuzu-nene-profile.jpg";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="logo-container">
        <img src={Logo} alt="logo" />
        <h1 className="devhire-title">DevHire</h1>
      </NavLink>
      <div className="links-container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "actived-link-tag" : "link-tag"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive ? "actived-link-tag" : "link-tag"
          }
        >
          Jobs
        </NavLink>
        <NavLink
          to="/add-job"
          className={({ isActive }) =>
            isActive ? "actived-link-tag" : "link-tag"
          }
        >
          Add Job
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

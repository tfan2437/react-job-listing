import "./Navbar.css";
import Logo from "../assets/images/momosuzu-nene-profile.jpg";

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="logo-container">
        <img src={Logo} alt="logo" />
        <h1 className="devhire-title">DevHire</h1>
      </a>
      <div className="a-container">
        <a href="#">Home</a>
        <a href="/jobs">Jobs</a>
        <a href="/add-job">Add Jobs</a>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="inner-nav">
        <div className="logo">
          <h2>Thought.Share</h2>
        </div>
        <div className="navbar">
          <h4>Home</h4>
          <h4>Blog</h4>
          <h4>About</h4>
          <h4>Contact</h4>
        </div>
        <div className="nav-buttons">
          <button className="login-btn">LogIn</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {
  return (
    <div className="navigation">
      <h1>Yumiko M.</h1>
    <div className="navigation-sub">
      <Link to="/" className="item">Experience</Link>
      <Link to="/personal" className="item">Personal</Link>
      <Link to="/about" className="item">About</Link>
    </div>
    </div>
  )
}

export default Navbar;

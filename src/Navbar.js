import React from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {
  return (
    <div className="navigation">
      <h1>Yumiko M.</h1>
      <div class="menu-wrap">
        <input type="checkbox" class="toggler"/>
          <div class="hamburger"><div></div></div>
          <div class="menu">
            <div>
              <div>
                <ul>
                  <li><a href="/projects">Experience + Projects</a></li>
                  <li><a href="/personal">For Fun</a></li>
                  <li><a href="/about">About</a></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    {/* <div className="navigation-sub">
      <Link to="/" className="item">Experience</Link>
      <Link to="/personal" className="item">Personal</Link>
      <Link to="/about" className="item">About</Link>
    </div> */}
    </div>
  )
}

export default Navbar;

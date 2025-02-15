import React from 'react';
import "./Navbar.css";
import img from "../../images/logo.png";
const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-flex">
            <div className="nav-left">
                <img src={img} alt="" className='logo'/>
            </div>
            <div className="nav-right">
                <h2>Exclusive LiveStreaming Services</h2>
            </div>
        </div>
    </div>
  );
}

export default Navbar;

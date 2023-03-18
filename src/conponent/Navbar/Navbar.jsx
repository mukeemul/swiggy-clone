import React from 'react';
import './Navbar.css';
import { RiArrowDropDownLine, RiSearchLine } from 'react-icons/ri';
import { MdLocalOffer, MdOutlineHelp } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BsCartCheck } from 'react-icons/bs';
// import { RiArrowDropDownLine, RiSearchLine } from 'react-icons/ri';

// import logo from './';

const Navbar = () => {
    return (
        <div className='container'>
            <header className='navbar'>
                <div className='logo'>
                    {/* <img src={logo} alt="Swiggy" /> */}
                    <h4 className='heading'>Other</h4>
                    <input type="search" placeholder='choose your location...' />
                        <RiArrowDropDownLine />
                </div>
                <div className="nav-links">
                        <ul className='nav-items'>
                            <li><RiSearchLine className='icons'/><a href="/">Search</a></li>
                            <li><MdLocalOffer className='icons'/><a href="">Offers</a></li>
                            <li><MdOutlineHelp className='icons'/><a href="">Help</a></li>
                            <li><CgProfile className='icons'/><a href="">Sign In</a></li>
                            <li><BsCartCheck className='icons'/><a href="">Cart</a></li>
                        </ul>
                </div>
            </header>
        </div>
    )
}

export default Navbar;

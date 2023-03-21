import React from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png'
import { RiArrowDropDownLine, RiSearchLine } from 'react-icons/ri';
import { MdLocalOffer, MdOutlineHelp, MdFilterList } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BsCartCheck } from 'react-icons/bs';


const Navbar = () => {
    return (
        <div className='container'>
            <header className='navbar'>
                <div className='logo'>
                    <img src={logo} alt="Swiggy" />
                    <h4 className='heading'>Other</h4>
                    <input type="search" placeholder='Neoria Husainpur' />
                    <RiArrowDropDownLine className='drop' />
                </div>
                <div className="nav-links">
                    <ul className='nav-items'>
                        <li><RiSearchLine className='icons' /><a href="/">Search</a></li>
                        <li><MdLocalOffer className='icons1' /><a href="/">Offers</a></li>
                        <li><MdOutlineHelp className='icons2' /><a href="/">Help</a></li>
                        <li><CgProfile className='icons3' /><a href="/">Sign In</a></li>
                        <li><BsCartCheck className='icons4' /><a href="/">Cart</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}
const Banner = () => {
    return (
        <>
            <Navbar />
            <div className="main-banner">
                <img width="260" height="260" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep" class="_1gDnr" />
                <img width="260" height="260" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym" class="_1gDnr" />
                <img width="260" height="260" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t" class="_1gDnr" />
                <img width="260" height="260" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3" class="_1gDnr" />
            </div>

        </>
    )
}
const Section = () => {
    return (
        <>
            <Banner />
            <div className='section'>
                <main>
                    <div className="left-section">
                        <h1>1383 restaurants</h1>
                    </div>
                    <div className="right-section">
                        <ul className='section-links'>
                            <li><a href="">Relevance</a></li>
                            <li><a href=""></a>Delivery Time</li>
                            <li><a href=""></a>Rating</li>
                            <li><a href=""></a>Cost: Low To High</li>
                            <li><a href=""></a>Cost: High To Low</li>
                            <li><a href=""></a>Filters <MdFilterList /></li>
                        </ul>
                    </div>
                </main>
            </div>
        </>
    )
}
export default Section;

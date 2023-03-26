import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png'
import RepData from '../../config/data'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdLocalOffer, MdOutlineHelp, MdFilterList, MdHome } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BsCartCheck } from 'react-icons/bs';

const Navbar = () => {
    const [data, setData] = useState(RepData);
    const [title, setTitle] = useState('');
    return (
        <div className='container'>
            <header className='navbar'>
                <div className='logo'>
                    <img src={logo} alt="Swiggy" />
                    <h4 className='heading'>Other</h4>
                    <input id='search' type="search" placeholder='Neoria Husainpur' />
                    <RiArrowDropDownLine className='drop' />
                </div>
                <div className="nav-links">
                    <ul className='nav-items'>
                        <li><MdHome className='icons' /><a href="/">Home</a></li>
                        <li><MdLocalOffer className='icons1' /><a href="/">Offers</a></li>
                        <li><MdOutlineHelp className='icons2' /><a href="/">Help</a></li>
                        <li><CgProfile className='icons3' /><a href="/">Sign In</a></li>
                        <li><BsCartCheck className='icons4' /><a href="/">Cart</a></li>
                    </ul>
                </div>
                <div className="searchbar">
                    <input className="search" placeholder='Type to search'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button onChange={ () =>{
                        const filterData = RepData.filter( (items) =>{
                            return items?.RepData?.name.includes(title);
                        });
                        setData(filterData);
                    }}>Search</button>
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
                <img width="260" height="260" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep" />
                <img width="260" height="260" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym" />
                <img width="260" height="260" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t" />
                <img width="260" height="260" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3" />
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
                            <li><a href="/">Relevance</a></li>
                            <li><a href="/"></a>Delivery Time</li>
                            <li><a href="/"></a>Rating</li>
                            <li><a href="/"></a>Cost: Low To High</li>
                            <li><a href="/"></a>Cost: High To Low</li>
                            <li><a href="/"></a>Filters <MdFilterList /></li>
                        </ul>
                    </div>
                </main>
            </div>
        </>
    )
}
export default Section;

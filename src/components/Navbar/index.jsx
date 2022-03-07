import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";


function Navbar(props) {
    const [isShow, setIsShow] = useState(false);
    const basket = useSelector(state => state.basket)
    console.log(basket)
    return (
        <div className='navbar'>
            <Link to="/" className="logo"> <i className="fas fa-shopping-basket"></i> Food </Link>

            <nav className={`header_nav ${isShow ? 'active' : ''}`}>
                <ul className={`nav_list`} onClick={() => setIsShow(!isShow)}>
                <li className='nav_item'><Link to='/' className='nav_link'>Home</Link></li>
                <li className='nav_item'><Link to='/filterArea/Italian' className='nav_link'>Italian</Link></li>
                <li className='nav_item'><Link to='filterArea/French' className='nav_link'>French</Link></li>
                <li className='nav_item'><Link to='filterArea/American' className='nav_link'>American</Link></li>
                <li className='nav_item'><Link to='filterArea/Kenyan' className='nav_link'>Kenyan</Link></li>
                <li className='nav_item'><Link to='filterArea/Turkish' className='nav_link'>Turkish</Link></li>
            </ul>
            </nav>

            <div className='header_icons'>
                <span id='toggle-menu' onClick={() => setIsShow(!isShow)} className={`fas ${isShow ? 'fa-times' : 'fa-bars'}`}></span>
                <Link to={'/search'}>
                    <span className='fas fa-search'></span>
                </Link>
                <Link to={'/favourites'}>
                    <div className='basket-btn'>
                        <span className='fas fa-star'></span>
                        <p>{basket.length}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
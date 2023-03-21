import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import carmaNavLogo from '../assets/carmaNavLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faX} from '@fortawesome/free-solid-svg-icons'

function NavBar () {
    const [toggle, setToggle] = useState(false)
    function toggleNav() {
        setToggle(prevState => !prevState)
    }
    return (
        <div className='navbar sm:grid grid-rows-2 pl-4'>
        <div className='nav-bar-container'>
            <NavLink to='/'>
                 <img src={carmaNavLogo}  alt='nav-logo' className='nav-logo'/>
            </NavLink>
        </div>
        <div className='nav-links hidden'>
            <li className='nav-link' to='/fashion-styling'>
                <NavLink  to='/fashion-styling'>
                    <p className='nav-name'>fashion / styling</p>
                </NavLink>
            </li>
            <li className='nav-link' to='/creative'>
                <NavLink  to='/creative'>
                    <p className='nav-name'>creative</p>
                </NavLink>
            </li>
            <li className='nav-link' to='/about-contact'>
                <NavLink  to='/about-contact'>
                    <p className='nav-name'>about / contact</p>
                </NavLink>
            </li>
        </div>
        <div className='space-x-12 sm:hidden' onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars}className='text-slate-900 text-3xl pr-4' />
        </div>
        {toggle && (
            <div className='menu text-white sm:hidden'>
                <FontAwesomeIcon 
                icon={faX}
                className='text-white text-xl absolute right-4 top-4'
                onClick={toggleNav}/>
                <ul className='text-2xl space-y-4 '>
                    <li onClick={toggleNav}>
                        <NavLink to='/fashion-styling' className='hover-nav-small'>
                            fashion / styling
                        </NavLink>
                    </li>
                    <li onClick={toggleNav}>
                        <NavLink to='/creative' className='hover-nav-small'>
                            creative
                        </NavLink>
                    </li>
                    <li onClick={toggleNav}>
                        <NavLink to='/about-contact' className='hover-nav-small'>
                            about / contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        )}
    </div>
    )
}

export default NavBar
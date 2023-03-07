import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import carmaNavLogo from '../assets/carmaNavLogo.png'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {
// 	faX,
// } from '@fortawesome/free-solid-svg-icons'

function NavBar () {
    const [toggle, setToggle] = useState(false)
    function toggleNav() {
        setToggle(prevState => !prevState)
    }
    return (
        <div className='navbar sm:grid grid-rows-2'>
        <div className='nav-bar-container'>
            <NavLink to='/'>
                 <img src={carmaNavLogo}  alt='nav-logo' className='nav-logo'/>
            </NavLink>
        </div>
        <div className='nav-links hidden space-x-4'>
            <li className='nav-link' to='/fashion-styling'>
                <NavLink  to='/fashion-styling'>
                    <p>fashion / styling</p>
                </NavLink>
            </li>
            <li className='nav-link' to='/creative'>
                <NavLink  to='/creative'>
                    <p>creative</p>
                </NavLink>
            </li>
            <li className='nav-link' to='/about-contact'>
                <NavLink  to='/about-contact'>
                    <p>about / contact</p>
                </NavLink>
            </li>
        </div>
        <div className='space-x-4 sm:hidden' onClick={toggleNav}>
            <p>menu</p>
            {/* <FontAwesomeIcon className='text-white text-3xl' icon={faBars} /> */}
        </div>
        {toggle && (
            <div className='menu text-white sm:hidden'>
                {/* <FontAwesomeIcon
                    icon={faX}
                    className='absolute top-4 right-4'
                    onClick={toggleNav}
                /> */}
                <ul className='text-2xl space-y-4'>
                            <li onClick={toggleNav}>
                                <NavLink to='/projects' className='hover-nav-small'>
                                    PROJECTS
                                </NavLink>
                            </li>
                            <li onClick={toggleNav}>
                                <NavLink to='/experiences' className='hover-nav-small'>
                                    WORK EXPERIENCES
                                </NavLink>
                            </li>
                            <li onClick={toggleNav}>
                                <NavLink to='/contact' className='hover-nav-small'>
                                    CONTACT
                                </NavLink>
                            </li>
                    <li onCllick={toggleNav}>
                        <NavLink to='/about' className='hover-nav-small'>
                            ABOUT
                        </NavLink>
                    </li>
                </ul>
            </div>
        )}
    </div>
    )
}

export default NavBar
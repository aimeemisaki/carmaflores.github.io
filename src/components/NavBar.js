import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/carma.ai'
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
        <>
        <div className='navbar horizontal justify-between items-center p-3'>
            <div>
                <NavLink to='/'>
                    <img src={logo} alt='nav-logo' className='nav-logo'/>
                </NavLink>
            </div>
            <div className='hidden space-x-4 sm:flex'>
                <NavLink className='nav-link' to ='/directory'>
                    <p>DIRECTORY</p>
                </NavLink>
                <NavDropdown title='WORK'>
                    <div>
                        <NavLink className='nav-link' to='/fashion'>
                            FASHION
                        </NavLink>
                        <NavLink className='nav-link' to='/creative'>
                            CREATIVE
                        </NavLink>
                        </div>
                </NavDropdown>
                <NavLink className='nav-link' to='/about-contact'>
                    <p>ABOUT/CONTACT</p>
                </NavLink>
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
                            <NavLink to='/directory' className='hover-nav-small'>
                                DIRECTORY
                            </NavLink>
                        </li>
                        <li onClick={toggleNav}>
                            <NavLink to='/fashion' className='hover-nav-small'>
                                FASHION
                            </NavLink>
                        </li>
                        <li onClick={toggleNav}>
                            <NavLink to='/creative' className='hover-nav-small'>
                                CREATIVE
                            </NavLink>
                        </li>
                        <li onClick={toggleNav}>
                            <NavLink to='/about-contact' className='hover-nav-small'>
                                ABOUT/CONTACT
                            </NavLink>
                        </li>
					</ul>
				</div>
			)}
		</div>
        </>
    )
}

export default NavBar
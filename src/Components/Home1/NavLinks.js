import React from 'react';
import './NavBar.scss';


const NavLinks = (props) => {
  return (
    <div className='divNav'>
        <a className="liNav" href="" onClick={() => props.isMobile && props.closeMobileMenu()}>Home</a>
        <a className="liNav" href="#About" onClick={() => props.isMobile && props.closeMobileMenu()}>About</a>
        <a className="liNav" href="#Products" onClick={() => props.isMobile && props.closeMobileMenu()}>Products</a>
        <a className="liNav" href="#Services" onClick={() => props.isMobile && props.closeMobileMenu()}>Services</a>
        <a className="liNav" href="#Contact" onClick={() => props.isMobile && props.closeMobileMenu()}>Contact</a>
    </div>
    
  )
}

export default NavLinks

import React from 'react';
import NavLinks from './NavLinks';
import './NavBar.scss';
import {AiOutlineMenu} from 'react-icons/ai';
import {CgClose} from 'react-icons/cg'
import { useState } from 'react';


const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburguerIcon = <AiOutlineMenu className='hamburguerMenu' onClick={()=> setOpen(!open)}/>

    const closeIcon = <CgClose className='closeMenu' onClick={()=> setOpen(!open)}/>

    const closeMobileMenu = () => setOpen(false);

  return ( 
    <nav className="mobileNavigation">
        {open ? closeIcon : hamburguerIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
   )
}

export default MobileNavigation;

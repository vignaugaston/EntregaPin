import React from 'react';
import './NavBar.scss';
import topLogo from '../../Media/topLogo.svg';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const NavBar = () => {
  return (
      <div className='headNav'>
        <header>
            <img className='imageLogo' src={topLogo} alt="logo" loading="lazy"/>
            <nav className='listNav'>
                <MobileNavigation/>
                <Navigation/>
            </nav>
        </header>
        <hr className='hrNav'></hr>
      </div>
  )
}

export default NavBar;

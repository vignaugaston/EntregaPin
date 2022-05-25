import React from 'react';
import './Footer.scss';
import footerLogo from '../../Media/footerLogo.svg';

const Footer = () => {
  return (
    <div id='Footer'>
        <div className='footerLeft'></div>
          <p className='parraFooter'>© All rights reserved.</p>
        <div className='footerRight'></div>
          <img className='footerImage' src={footerLogo} alt="..."/>
    </div>
  )
}

export default Footer

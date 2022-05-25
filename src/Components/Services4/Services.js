import React from 'react';
import './Services.scss';
import section4Image from '../../Media/section4Image.png';
import FormService from './FormService';

const Services = () => {
  return (
    <div id='Services'>
        <FormService/>
        <img className='serviceImage' src={section4Image} alt="..."/>
        
    </div>
  )
}

export default Services;

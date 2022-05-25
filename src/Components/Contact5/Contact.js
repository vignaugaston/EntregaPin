import React from 'react';
import './Contact.scss';
import contactImage from '../../Media/contactImage.png';
// import UseForms from './Form/UseForms';
// import Formulario from './Formulario';
import Formu from './Formulario/Formu';

const Contact = () => {
  return (
    <div id='Contact'>
      <div className='fondoGris'></div>
          <h2 className="blackTitle">Get in touch</h2>
          <h2 className='orangeTitle'>We are hiring!</h2>
          {/* <Formulario/> */}
          {/* <UseForms/> */}
          <Formu/>
          <img className='contactImage' src={contactImage} alt="..."/>

    </div>
  )
}

export default Contact

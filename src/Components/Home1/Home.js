import React from 'react';
import './Home.scss';
import NavBar from './NavBar';
import slider1 from '../../Media/slider1.png';
import carretera from '../../Media/carretera.jpg';
import montaNevadas from '../../Media/montaNevadas.jpg';



const Home = () => {
  return (
    <div className='firstPage'>
      <div className='imageBack'></div>
      <div className='HomeCarousel'>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active slideBut" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1}  className="d-block w-100 imageCarou" alt="..."/>
        </div>
          <div className="carousel-item">
            <img src={carretera}  className="d-block w-100 imageCarou" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={montaNevadas}  className="d-block w-100 imageCarou" alt="..."/>
          </div>
        </div>
        </div>
      </div>

      <NavBar/>
      <div id='Home'>
        <div className='contHome'>
          <h1 className='homeTitle'>Sed ut perspiciatis unde omnis iste natus</h1>
          <p className='homeParra'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
          <button className='homeButton'>Read More</button>
        </div>
      </div>
      </div>
  )
}


export default Home;

import React from 'react';
import './Carousel.scss';
import section3image from '../../Media/section3image.png';

const Carousel = () => {
  return (
    <div className='Carousel'>
        <div className='divImage'>
            <img className='imageCarousel' src={section3image} alt="..."/>
        </div>
        <div className='textCarousel'>
            <div id="carouselExampleControls" className="carousel slide slideArrow" data-bs-ride="carousel">
                <div className='carousel-inner'>
                <div className="carousel-item active">
                    <h4 className='h4Carousel'>Sed ut perspiciatis</h4>
                    <h3 className='h3Carousel'>Nemo Enim</h3>
                    <p className='parraCarousel'>Sed ut perspiciatis unde imnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
                <div className="carousel-item">
                    <h4 className='h4Carousel'>Egestas diam in</h4>
                    <h3 className='h3Carousel'>Molestie ac</h3>
                    <p className='parraCarousel'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                </div>
                <button className='carousel-control-prev' type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className='carousel-control-prev-icon' aria-hidden="true"></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Carousel;

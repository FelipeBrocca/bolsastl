import React, { useRef, useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carrousel.css";
import Image from '../Image/Image'
import Image1 from '../../images/slide1.jpg'
import Image2 from '../../images/slide2.jpg'
import Image3 from '../../images/slide3.jpg'


const Carrousel = () => {

    const handleClickScroll = (id) => {
        const toScroll = document.getElementById(id)
        if (toScroll) {
            toScroll.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <div className='principal-carousel-container'>
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={10000}
                showArrows={false}
                showStatus={false}
                stopOnHover={true}
                swipeScrollTolerance={50}
                preventMovementUntilSwipeScrollTolerance={true}
            >
                <div className='image-slide-container'>
                    <div className='cover-slide'>
                        <h3
                            className='cover-slide-title'
                        >LÍDERES EN PRODUCTOS DE GEOMEMBRANA</h3>
                        <p className='cover-slide-text'>Mayor durabilidad y resistencia, mayor eficiencia de alimentación, reduce desperdicios de sólidos y líquidos.</p>
                        <button
                            className='cover-slide-button'
                            onClick={() => handleClickScroll('products-container')}
                        >Conocé nuestros productos</button>
                    </div>
                    <Image src={Image1} alt='slide1' className='image-slide' />
                </div>
                <div className='image-slide-container'>
                    <div className='cover-slide'>
                    <h3
                            className='cover-slide-title'
                        >BOLSAS DE POLIPROPILENO</h3>
                        <p className='cover-slide-text'>Bolsas, bolsones y big bags de todos los tamaños, la mejor calidad.</p>
                        <button
                            className='cover-slide-button'
                            onClick={() => handleClickScroll('bags-container')}
                        >Conocé nuestras bolsas</button>
                    </div>
                    <Image src={Image2} alt='slide2' className='image-slide' />
                </div>
                <div className='image-slide-container'>
                    <div className='cover-slide'>
                    <h3
                            className='cover-slide-title'
                        >QUIÉNES SOMOS</h3>
                        <p className='cover-slide-text'>Trabajamos hace 10 años para mejorar la calidad y el rendimiento de tu trabajo</p>
                        <button
                            className='cover-slide-button'
                            onClick={() => handleClickScroll('company-section')}
                        >CONOCENOS</button>
                    </div>
                    <Image src={Image3} alt='slide3' className='image-slide' />
                </div>
            </Carousel>
        </div>
    );
};

export default Carrousel;

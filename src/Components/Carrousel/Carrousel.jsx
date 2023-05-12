import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carrousel.css";
import Image from '../Image/Image'
import Image1 from '../../images/slide1.jpg'
import Image2 from '../../images/slide2.jpg'
import Image3 from '../../images/slide3.jpg'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import DataContact from '../Contact/DataContact'


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
                        <div className='items-slide-ss'>
                            <span
                                className='cover-slide-title'
                            >LÍDERES EN PRODUCTOS DE GEOMEMBRANA</span>
                            <p className='cover-slide-text'>+ Durabilidad y resistencia</p>
                            <p className='cover-slide-text'>+ Eficiencia de alimentación</p>
                            <p className='cover-slide-text'>Reduce desperdicios</p>
                            <button
                                className='cover-slide-button'
                                onClick={() => handleClickScroll('products-container')}
                            >Conocé nuestros productos</button>
                        </div>
                        <div className='items-slide-bs'>
                            <p>Comederos</p>
                            <p>Tanques Australianos</p>
                            <p>Reservorios de agua</p>
                            <p>Estanques artificiales</p>
                        </div>
                    </div>
                    <Image src={Image1} alt='slide1' className='image-slide' />
                </div>
                <div className='image-slide-container'>
                    <div className='cover-slide'>
                        <div className='items-slide-ss'>
                            <h3
                                className='cover-slide-title'
                            >BOLSAS DE POLIPROPILENO</h3>
                            <p className='cover-slide-text'>Bolsas</p>
                            <p className='cover-slide-text'>Bolsones</p>
                            <p className='cover-slide-text'>Big bags</p>
                            <p className='cover-slide-text'>La mejor calidad y resistencia</p>
                            <button
                                className='cover-slide-button'
                                onClick={() => handleClickScroll('bags-container')}
                            >Conocé nuestras bolsas</button>
                        </div>
                        <div className='items-slide-bs'>
                            <span>
                                <FontAwesomeIcon icon={faBagShopping} />
                                <span>
                                    <p>47 x 90</p>
                                    <p>52 x 98</p>
                                    <p>60 x 98</p>
                                </span>
                            </span>
                        </div>
                    </div>
                    <Image src={Image2} alt='slide2' className='image-slide' />
                </div>
                <div className='image-slide-container'>
                    <div className='cover-slide'>
                        <div className='items-slide-ss'>
                            <h3
                                className='cover-slide-title'
                            >ACERCA DE NOSOTROS</h3>
                            <p className='cover-slide-text'>Más de 10 años</p>
                            <p className='cover-slide-text'>Mejoramos la calidad y el rendimiento de tu trabajo</p>
                            <p className='cover-slide-text'>Brindamos soporte y atención de calidad</p>
                            <button
                                className='cover-slide-button'
                                onClick={() => handleClickScroll('company-section')}
                            >CONOCENOS</button>
                        </div>
                        <div className='items-slide-bs'>
                            <DataContact />
                        </div>
                    </div>
                    <Image src={Image3} alt='slide3' className='image-slide' />
                </div>
            </Carousel>
        </div>
    );
};

export default Carrousel;

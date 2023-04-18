import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carrousel.css";
import Image from '../Image/Image'
import Image1 from '../../images/slide1.jpg'
import Image2 from '../../images/slide2.jpg'
import Image3 from '../../images/slide3.jpg'


const Carrousel = () => {

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
                    <Image src={Image1} alt='slide1' className='image-slide' />
                </div>
                <div className='image-slide-container'>
                    <Image src={Image2} alt='slide2' className='image-slide' />
                </div>
                <div className='image-slide-container'>
                    <Image src={Image3} alt='slide3' className='image-slide' />
                </div>
            </Carousel>
        </div>
    );
};

export default Carrousel;

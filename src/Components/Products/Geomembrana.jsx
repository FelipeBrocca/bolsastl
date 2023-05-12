import React from 'react'
import Image from '../Image/Image'
import { Carousel } from 'react-responsive-carousel'

const Geomembrana = ({ geo, coloc, isActive }) => {

  const handleClickScroll = (id) => {
    const toScroll = document.getElementById(id)
    if (toScroll) {
      toScroll.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`product-container-carousel ${isActive ? 'active' : ''} geo`}>
      <div className='contain-product'>
        <h3 className='product-title geo'>{geo.name}</h3>
        <div className='image-product-container geo'>
          <Carousel
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            autoPlay={true}
            interval={8000}
            swipeScrollTolerance={50}
            preventMovementUntilSwipeScrollTolerance={true}
            infiniteLoop={true}
          >
            {
              geo.image.map((img) => (
                <Image src={img.img} alt={`prod-${geo.name}`} className='image-product geo' key={geo.name} />
              ))
            }
          </Carousel>
        </div>
        <p className='product-text geo'>{geo.text}</p>
      </div>
      <div className='button-col-container geo'>
        {
          coloc
            ? <button onClick={() => handleClickScroll('contact-section')} className='button-col geo'>Consultar por servicio de colocacion</button>
            : <p style={{ fontWeight: 'bolder' }}>* No contamos con servicio de colocación</p>
        }
      </div>
    </div>
  )
}

export default Geomembrana
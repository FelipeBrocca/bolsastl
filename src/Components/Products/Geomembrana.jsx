import React from 'react'
import Image from '../Image/Image'

const Geomembrana = ({ geo }) => {
  return (
    <div className='geo-product-container'>
      <h3 className='geo-product-title'>{geo.name}</h3>
      <div className='image-product-geo-container'>
        <Image src={geo.image} alt={`prod-${geo.name}`} className='image-geo-product' />
      </div>
      <p className='geo-product-text'>{geo.text}</p>
    </div>
  )
}

export default Geomembrana
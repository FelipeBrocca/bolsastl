import React from 'react'
import Image from '../Image/Image'

const Geomembrana = ({ geo, children }) => {
  return (
    <div className='product-container-carousel geo'>
      <h3 className='product-title geo'>{geo.name}</h3>
      <div className='image-product-container geo'>
        <Image src={geo.image} alt={`prod-${geo.name}`} className='image-product geo' />
      </div>
      <p className='product-text geo'>{geo.text}</p>
      {children}
    </div>
  )
}

export default Geomembrana
import React from 'react'
import Image from '../Image/Image'

const Bags = ({ geo, children }) => {
  return (
    <div className='product-container-carousel bags'>
      <h3 className='product-title bags'>{geo.name}</h3>
      <div className='image-product-container bags'>
        <Image src={geo.image} alt={`prod-${geo.name}`} className='image-product bags' />
      </div>
      <p className='product-text bags'>{geo.text}</p>
      {children}
    </div>
  )
}

export default Bags
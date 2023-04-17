import React from 'react'
import Image from '../Image/Image'
import engranaje from '../../images/engranaje.png'
import reunion from '../../images/Reunion.png'
import manitos from '../../images/manitos-2.png'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner-container'>
         <div className='banner-item'>
            <Image src={engranaje} className='banner-item-img' alt='banner-i1' />
            <p className='banner-item-text'>Materiales resistentes de primera calidad, importados desde ****</p>
         </div>
         <div className='banner-item'>
            <Image src={reunion} className='banner-item-img' alt='banner-i2' />
            <p className='banner-item-text'>Soluciones adaptadas a las necesidades de cada cliente</p>
         </div>
         <div className='banner-item'>
            <Image src={manitos} className='banner-item-img' alt='banner-i2' />
            <p className='banner-item-text'>Trabajamos en equipo para lograr los objetivos</p>
         </div>
    </div>
  )
}

export default Banner
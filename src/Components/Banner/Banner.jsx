import React from 'react'
import engranaje from '../../images/engranaje.png'
import reunion from '../../images/Reunion.png'
import manitos from '../../images/manitos-2.png'
import './Banner.css'
import BannerItem from './BannerItem'

const Banner = () => {

   const bannersItem = [
      {
         image: engranaje,
         text: 'Materiales resistentes de primera calidad importados'
      },
      {
         image: reunion,
         text: 'Soluciones adaptadas a las necesidades de cada cliente'
      },
      {
         image: manitos,
         text: 'Trabajamos en equipo para lograr los objetivos'
      }
   ]

   return (
      <div className='banner-container'>
         {
            bannersItem.map(({ image, text }, index) => (
               <BannerItem
                  src={image}
                  text={text}
                  key={index}
               />
            ))
         }
      </div>
   )
}

export default Banner
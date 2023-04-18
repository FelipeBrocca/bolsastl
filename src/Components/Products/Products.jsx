import React, { useState, useRef } from 'react'
import comedero from '../../images/slide2.jpg'
import tanque from '../../images/slide3.jpg'
import Geomembrana from './Geomembrana'
import imper from '../../images/tanque-geom.jpg'
import './Products.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Products = () => {

  const [selectedSlide, setSelectedSlide] = useState(0);

  const geoProducts = [
    {
      id: 0,
      name: 'Tanques Australianos',
      image: tanque,
      text: 'Fabricados con geomembrana de alta calidad, estos tanques son impermeables y resistentes a la intemperie, garantizando una solución confiable para tus necesidades de almacenamiento de agua. Son fáciles de instalar y mantener, y su diseño modular permite adaptarlos a diferentes capacidades de almacenamiento. Además, la geomembrana previene la infiltración y la pérdida de agua, lo que ayuda a conservar este recurso valioso. Nuestros tanques australianos de geomembrana son una opción sostenible para el almacenamiento de agua, reduciendo la evaporación y minimizando el impacto ambiental. Contáctanos para obtener más información sobre cómo nuestros tanques australianos de geomembrana pueden beneficiar tu proyecto de almacenamiento de agua.'
    },
    {
      id: 1,
      name: 'Comederos',
      image: comedero,
      text: 'Descubre nuestros comederos para ganado con geomembrana, una solución innovadora y sostenible para mejorar la alimentación de tu ganado. Nuestros comederos utilizan geomembrana de alta calidad, impermeable y resistente a la intemperie, reduciendo el desperdicio de alimentos y agua. Son fáciles de instalar y mantener, ajustables a las necesidades de tu ganado y resistentes a la corrosión. Además, son una opción sostenible al prevenir la lixiviación de nutrientes y optimizar los costos. Mejora la eficiencia de alimentación de tu ganado y minimiza el impacto ambiental con nuestros comederos para ganado con geomembrana. Contáctanos para obtener más información.'
    },
    {
      id: 2,
      name: 'Impermeabilizaciones',
      image: imper,
      text: 'Descubre nuestras soluciones de impermeabilización con geomembrana para la fabricación de estanques artificiales. Nuestras geomembranas de alta calidad son impermeables y resistentes a la intemperie, proporcionando una barrera efectiva para prevenir filtraciones y asegurar la retención del agua en tus estanques. Son fáciles de instalar y adaptar a diferentes tamaños y formas de estanques, lo que facilita su implementación. Nuestras geomembranas también son duraderas y de bajo mantenimiento, lo que reduce los costos a largo plazo.'
    }
  ]

  const bags = [
    {
      id: 0,
      name: 'Bolsas',
      text: 'Nuestras bolsas de polipropileno son resistentes, versátiles y perfectas para el envasado de alimentos, productos agrícolas y más. Ligeras, transparentes y personalizables, son una opción económica y práctica para tus necesidades de empaque. Contáctanos para obtener más información.'
    }, {
      id: 1,
      name: 'Bolsones',
      text: 'Nuestras bolsas de polipropileno son resistentes, versátiles y perfectas para el envasado de alimentos, productos agrícolas y más. Ligeras, transparentes y personalizables, son una opción económica y práctica para tus necesidades de empaque. Contáctanos para obtener más información'
    }, {
      id: 2,
      name: 'Big bags',
      text: 'Nuestras bolsas de polipropileno son resistentes, versátiles y perfectas para el envasado de alimentos, productos agrícolas y más. Ligeras, transparentes y personalizables, son una opción económica y práctica para tus necesidades de empaque. Contáctanos para obtener más información'
    }
  ]

  const carouselRef = useRef(null);
  const handleLiItemClick = (index) => {
    setSelectedSlide(index);
    carouselRef.current.selectItem(index, false);
  };


  return (
    <div className='products-container'>
      <div className='geo-container'>
        <ul className='geo-nav-list'>
          {
            geoProducts.map(({ id, name }, index) => (
              <li
                key={name}
                className={`geo-nav-item ${selectedSlide === id ? 'selected' : ''}`}
                onClick={() => handleLiItemClick(index)}
              >
                {
                selectedSlide !== id
                && name.length > 10 ? `${name.slice(0, 9)}...` : name
                }
              </li>
            ))
          }
        </ul>
        <Carousel
          ref={carouselRef}
          selectedItem={selectedSlide}
          showIndicators={false}
          autoPlay={false}
          swipeable={false}
          showStatus={false}
        >
          {
            geoProducts.map((geo) => {
              return (
                <Geomembrana
                  key={geo.id + geo.name}
                  geo={geo}
                />
              )
            })
          }
        </Carousel>
      </div>
      <div className='bags-container'>

      </div>
    </div>
  )
}

export default Products
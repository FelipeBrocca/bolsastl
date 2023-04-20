import React, { useState, useRef, useEffect } from 'react'
import comedero from '../../images/slide2.jpg'
import tanque from '../../images/slide3.jpg'
import Geomembrana from './Geomembrana'
import imper from '../../images/tanque-geom.jpg'
import bolsas from '../../images/bolsas.jpeg'
import bolsones from '../../images/bolsones.jpeg'
import bigbags from '../../images/bigbags.jpeg'
import './Products.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Bags from './Bags'

const Products = () => {

  const [selectedGeoSlide, setSelectedGeoSlide] = useState(0);
  const [selectedBagSlide, setSelectedBagSlide] = useState(0);

  const geoProducts = [
    {
      id: 0,
      name: 'Tanques Australianos',
      image: tanque,
      text: 'Fabricados con geomembrana de alta calidad, estos tanques son impermeables y resistentes a la intemperie, garantizando una solución confiable para tus necesidades de almacenamiento de agua. Son fáciles de instalar y mantener, y su diseño modular permite adaptarlos a diferentes capacidades de almacenamiento. Además, la geomembrana previene la infiltración y la pérdida de agua, lo que ayuda a conservar este recurso valioso. Nuestros tanques australianos de geomembrana son una opción sostenible para el almacenamiento de agua, reduciendo la evaporación y minimizando el impacto ambiental. Contáctanos para obtener más información sobre cómo nuestros tanques australianos de geomembrana pueden beneficiar tu proyecto de almacenamiento de agua.',
      coloc: true
    },
    {
      id: 1,
      name: 'Comederos',
      image: comedero,
      text: 'Descubre nuestros comederos para ganado con geomembrana, una solución innovadora y sostenible para mejorar la alimentación de tu ganado. Nuestros comederos utilizan geomembrana de alta calidad, impermeable y resistente a la intemperie, reduciendo el desperdicio de alimentos y agua. Son fáciles de instalar y mantener, ajustables a las necesidades de tu ganado y resistentes a la corrosión. Además, son una opción sostenible al prevenir la lixiviación de nutrientes y optimizar los costos. Mejora la eficiencia de alimentación de tu ganado y minimiza el impacto ambiental con nuestros comederos para ganado con geomembrana. Contáctanos para obtener más información.',
      coloc: false
    },
    {
      id: 2,
      name: 'Impermeabilizaciones',
      image: imper,
      text: 'Descubre nuestras soluciones de impermeabilización con geomembrana para la fabricación de estanques artificiales. Nuestras geomembranas de alta calidad son impermeables y resistentes a la intemperie, proporcionando una barrera efectiva para prevenir filtraciones y asegurar la retención del agua en tus estanques. Son fáciles de instalar y adaptar a diferentes tamaños y formas de estanques, lo que facilita su implementación. Nuestras geomembranas también son duraderas y de bajo mantenimiento, lo que reduce los costos a largo plazo.',
      coloc: true
    }
  ]

  const bags = [
    {
      id: 0,
      name: 'Bolsas',
      image: bolsas,
      text: 'Nuestras bolsas de polipropileno son resistentes, versátiles y perfectas para el envasado de alimentos, productos agrícolas y más. Ligeras, transparentes y personalizables, son una opción económica y práctica para tus necesidades de empaque. Contáctanos para obtener más información.'
    }, {
      id: 1,
      name: 'Bolsones',
      image: bolsones,
      text: 'Nuestras bolsas de polipropileno son resistentes, versátiles y perfectas para el envasado de alimentos, productos agrícolas y más. Ligeras, transparentes y personalizables, son una opción económica y práctica para tus necesidades de empaque. Contáctanos para obtener más información'
    }, {
      id: 2,
      name: 'Big bags',
      image: bigbags,
      text: 'Nuestras bolsas de polipropileno son resistentes, versátiles y perfectas para el envasado de alimentos, productos agrícolas y más. Ligeras, transparentes y personalizables, son una opción económica y práctica para tus necesidades de empaque. Contáctanos para obtener más información'
    }
  ]

  const carouselRef = useRef(null);

  const handleLiItemClick = (index) => {
    setSelectedGeoSlide(index);
    carouselRef.current.selectItem(index, false);
  };
  const handleLiItemClickBag = (index) => {
    setSelectedBagSlide(index);
    carouselRef.current.selectItem(index, false);
  };

  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIsActive(true);
            observer.unobserve(entry.target);
        }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
}, []);


  return (
    <div ref={ref} className='products-container' id='products-container'>
      <div className='product-container geo'>
        <h2 className={`product-container-title ${isActive ? 'active' : ''}`}>Trabajos con Geomembrana</h2>
        <div className='product-container-contain'>
          <ul className={`product-nav-list ${isActive ? 'active' : ''} geo`}>
            {
              geoProducts.map(({ id, name }, index) => (
                <li
                  key={name}
                  className={`product-nav-item ${selectedGeoSlide === id ? 'selected' : ''} geo`}
                  onClick={() => handleLiItemClick(index)}
                >
                  <p className='small-nav-item-text'>
                    {
                      selectedGeoSlide !== id
                        && name.length
                        > 10 ? `${name.slice(0, 9)}...` : name
                    }
                  </p>
                  <p className='big-nav-item-text'>
                    {name}
                  </p>
                </li>
              ))
            }
          </ul>
          <Carousel
            ref={carouselRef}
            selectedItem={selectedGeoSlide}
            showIndicators={false}
            autoPlay={false}
            swipeable={false}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
          >
            {
              geoProducts.map((geo) => {
                return (
                  <Geomembrana
                    key={geo.id + geo.name}
                    geo={geo}
                    isActive={isActive}
                    coloc={geo.coloc}
                  >
                  </Geomembrana>
                )
              })
            }
          </Carousel>
        </div>
      </div>
      <div className='bags-container' id='bags-container'>
        <div className='product-container bags'>
          <h2 className={`product-container-title ${isActive ? 'active' : ''}`}>Bolsas</h2>
          <div className='product-container-contain'>
            <ul className={`product-nav-list ${isActive ? 'active' : ''} bags`}>
              {
                bags.map(({ id, name }, index) => (
                  <li
                    key={name}
                    className={`product-nav-item ${selectedBagSlide === id ? 'selected' : ''} bags`}
                    onClick={() => handleLiItemClickBag(index)}
                  >
                    <p className='big-nav-item-text always'>
                      {name}
                    </p>
                  </li>
                ))
              }
            </ul>
            <Carousel
              ref={carouselRef}
              selectedItem={selectedBagSlide}
              showIndicators={false}
              autoPlay={false}
              swipeable={false}
              showStatus={false}
              showThumbs={false}
              showArrows={false}
            >
              {
                bags.map((geo) => {
                  return (
                    <Bags
                      key={geo.id + geo.name}
                      geo={geo}
                      isActive={isActive}
                    >
                    </Bags>
                  )
                })
              }
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
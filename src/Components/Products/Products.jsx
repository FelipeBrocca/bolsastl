import React, { useState, useRef, useEffect } from 'react'
import Geomembrana from './Geomembrana'
import './Products.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from '../Image/Image'
import tanque from '../../images/tanqueaus.jpg'
import tanque2 from '../../images/tanqueaus2.jpg'
import imper from '../../images/imper.jpg'
import imper2 from '../../images/imper2.jpg'
import imper3 from '../../images/imper3.jpg'
import bolsas from '../../images/bolsas.jpeg'
import bolsones from '../../images/bolsones.jpeg'
import comedero from '../../images/comedero.jpg'
import comedero2 from '../../images/comedero2.jpg'


const Products = () => {

  const [selectedGeoSlide, setSelectedGeoSlide] = useState(0);

  const geoProducts = [
    {
      id: 0,
      name: 'Tanques Australianos',
      image: [
        {img: tanque},
        {img: tanque2}
      ],
      text: 'Fabricados con geomembrana de alta calidad, estos tanques son impermeables y resistentes a la intemperie, garantizando una solución confiable para tus necesidades de almacenamiento de agua. Son fáciles de instalar y mantener, y su diseño modular permite adaptarlos a diferentes capacidades de almacenamiento. Además, la geomembrana previene la infiltración y la pérdida de agua, lo que ayuda a conservar este recurso valioso. Nuestros tanques australianos de geomembrana son una opción sostenible para el almacenamiento de agua, reduciendo la evaporación y minimizando el impacto ambiental. Contáctanos para obtener más información sobre cómo nuestros tanques australianos de geomembrana pueden beneficiar tu proyecto de almacenamiento de agua.',
      coloc: true
    },
    {
      id: 1,
      name: 'Comederos',
      image: [
        {img: comedero},
        {img: comedero2}
      ],
      text: 'Descubre nuestros comederos para ganado con geomembrana, una solución innovadora y sostenible para mejorar la alimentación de tu ganado. Nuestros comederos utilizan geomembrana de alta calidad, impermeable y resistente a la intemperie, reduciendo el desperdicio de alimentos y agua. Son fáciles de instalar y mantener, ajustables a las necesidades de tu ganado y resistentes a la corrosión. Además, son una opción sostenible al prevenir la lixiviación de nutrientes y optimizar los costos. Mejora la eficiencia de alimentación de tu ganado y minimiza el impacto ambiental con nuestros comederos para ganado con geomembrana. Contáctanos para obtener más información.',
      coloc: false
    },
    {
      id: 2,
      name: 'Impermeabilizaciones',
      image: [
        { img: imper },
        { img: imper2 },
        { img: imper3 }
      ],
      text: 'Descubre nuestras soluciones de impermeabilización con geomembrana para la fabricación de estanques artificiales. Nuestras geomembranas de alta calidad son impermeables y resistentes a la intemperie, proporcionando una barrera efectiva para prevenir filtraciones y asegurar la retención del agua en tus estanques. Son fáciles de instalar y adaptar a diferentes tamaños y formas de estanques, lo que facilita su implementación. Nuestras geomembranas también son duraderas y de bajo mantenimiento, lo que reduce los costos a largo plazo.',
      coloc: true
    }
  ]

  const carouselRef = useRef(null);

  const handleLiItemClick = (index) => {
    setSelectedGeoSlide(index);
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
          <h2 className={`product-container-title ${isActive ? 'active' : ''}`}>Nuestras bolsas</h2>
          <div className={`product-container-contain bags ${isActive ? 'active' : ''}`}>
            <div className='image-bags-products'>
              <Image src={bolsas} alt='bag-ic' />
            </div>
            <div className='text-bags-products'>
              <p>Los Big Bags son contenedores flexibles
                y resistentes diseñados para transportar
                y almacenar grandes cantidades de
                materiales a granel, tales como productos
                químicos, alimentos, semillas, minerales,
                y mucho más. Estos productos son ideales
                para aquellos que buscan una solución de
                almacenamiento eficiente, segura y
                económica.
                Pero eso no es todo, nuestros Big Bags son
                también respetuosos con el medio
                ambiente. Son reutilizables y se pueden
                reciclar fácilmente después de su uso,
                reduciendo la huella de carbono de tu
                negocio.</p>
            </div>
            <div className='image-bags-products'>
              <Image src={bolsones} alt='bigbag-ic' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
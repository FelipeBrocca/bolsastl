import React from 'react'
import Image from '../Image/Image'
import img from '../../images/company.jpg'
import './Company.css'


const Company = () => {
    return (
        <div className='company-section' id='company-section'>
            <h2 className='company-title'>Quiénes somos</h2>
            <div className='img-company-container'>
                <Image src={img} alt='im-company' className='img-company' />
            </div>
            <div className='text-company-section'>
                <strong>Somos una empresa constructora líder con más de 10 años de trayectoria en la comercialización e instalación de materiales geosintéticos. Brindamos soluciones en temas ambientales.</strong>
                <p>Las geomembranas de polietileno están específicamente diseñadas para trabajar en condiciones expuestas. Se fabrican con diferentes polímeros y bajo estrictas normas de calidad. Ofrecen una excelente resistencia química, mecánica y a los rayos UV. Son ideales para la contención de líquidos, gases y sólidos. Además, brindan la posibilidad de ensayar la totalidad de las uniones soldadas y la integridad de la lámina in situ mediante rigurosos protocolos de calidad conforme a normas ASTMD.</p>
            </div>
        </div>
    )
}

export default Company
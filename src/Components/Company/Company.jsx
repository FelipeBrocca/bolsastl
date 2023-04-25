import React, { useEffect, useRef, useState } from 'react'
import Image from '../Image/Image'
import img from '../../images/company.jpg'
import './Company.css'


const Company = () => {

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
        <div
            ref={ref}
            className='company-section'
            id='company-section'
        >
            <h2
                className={`company-title ${isActive ? 'active' : ''}`}>ACERCA DE NOSOTROS</h2>
            <div className='company-contain'>
                <div
                    className={`img-company-container ${isActive ? 'active' : ''}`}>
                    <Image src={img} alt='im-company' className={`img-company ${isActive ? 'active' : ''}`} />
                </div>
                <div
                    className={`text-company-section ${isActive ? 'active' : ''}`}>
                    <strong>Somos una empresa constructora líder con más de 10 años de trayectoria en la comercialización e instalación de materiales geosintéticos. Brindamos soluciones en temas ambientales.</strong>
                    <p>Las geomembranas de polietileno están específicamente diseñadas para trabajar en condiciones expuestas. Se fabrican con diferentes polímeros y bajo estrictas normas de calidad. Ofrecen una excelente resistencia química, mecánica y a los rayos UV. Son ideales para la contención de líquidos, gases y sólidos. Además, brindan la posibilidad de ensayar la totalidad de las uniones soldadas y la integridad de la lámina in situ mediante rigurosos protocolos de calidad conforme a normas ASTMD.</p>
                </div>
            </div>
        </div>
    )
}

export default Company
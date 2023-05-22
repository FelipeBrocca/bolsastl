import React, { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Image from '../Image/Image'
import comp2 from '../../images/res-agua.jpg'

const Chosen = () => {

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
        <>
            <h2 className={`ch-opt-title ${isActive ? 'active' : ''}`} ref={ref}>POR QUÉ NOS ELIGEN</h2>
            <div className={`ch-opt-section ${isActive ? 'active' : ''}`}>
                <ul>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <strong>SEGUROS Y EFECTIVOS</strong>
                        <p>Aplicamos las técnicas más efectivas bajo la responsabilidad de nuestro personal, que está constantemente capacitado.</p>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <strong>ASISTENCIA ADMINISTRATIVA INMEDIATA</strong>
                        <p>Nuestra mesa de ayuda brinda asesoramiento al instante. Solicitá presupuestos, etc.</p>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <strong>CALIDAD GARANTIZADA</strong>
                        <p>Utilizamos materiales de alta calidad y durabilidad para la fabricación de nuestras geomembranas, lo que garantiza una larga vida útil y un excelente rendimiento.</p>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <strong>SOMOS ECO FRIENDLY</strong>
                        <p>Nuestros productos de geomembrana se fabrican con materiales ecológicos y sostenibles, lo que reduce el impacto ambiental en la realización de trabajos.</p>
                    </li>
                </ul>
                <Image src={comp2} alt='comp-2' className='img-comp2' />
            </div>
        </>
    )
}

export default Chosen
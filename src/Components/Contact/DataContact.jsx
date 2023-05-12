import React from 'react'
import ReactWhatsapp from 'react-whatsapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';
import GoogleMapsLink from '../GoogleMapsLink/MapsLink';


const DataContact = () => {
    return (
        <ul className='data-list'>
            <li className='data-item'>
                <ReactWhatsapp
                    className='fa fa-whatsapp'
                    number='+54 9 2392-517367'
                ><p>2392 - 517367</p></ReactWhatsapp>
            </li>
            <li className='data-item'>
                <FontAwesomeIcon icon={faEnvelope} />
                <p className='large-p'>bolsastrenquelauquen@gmail.com</p>
            </li>
            <li className='data-item'>
                <FontAwesomeIcon icon={faThumbTack} />
                <GoogleMapsLink destination="Regimiento 3 de Caballeria 328, B6400 Trenque Lauquen, Provincia de Buenos Aires" />
            </li>
            <li className='data-item'>
                <p>Trenque Lauquen, Buenos Aires</p>
            </li>
        </ul>
    )
}

export default DataContact
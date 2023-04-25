import React from 'react'
import ReactWhatsapp from 'react-whatsapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';


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
                <p>bolsastl@gmail.com</p>
            </li>
            <li className='data-item'>
                <FontAwesomeIcon icon={faThumbTack} />
                <p>Direccion 123</p>
            </li>
            <li className='data-item'>
                <p>Trenque Lauquen, Buenos Aires</p>
            </li>
        </ul>
    )
}

export default DataContact
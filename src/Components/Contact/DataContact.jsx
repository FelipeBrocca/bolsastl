import React from 'react'
import ReactWhatsapp from 'react-whatsapp';


const DataContact = () => {
    return (
        <ul className='data-list'>
            <li className='data-item'>
                <ReactWhatsapp 
                className='fa fa-whatsapp'
                number='+54 9 2392-517367'
                ><p>2392 - 517367</p></ReactWhatsapp>
            </li>
            <li className='data-item'>bolsastl@gmail.com</li>
            <li className='data-item'>Direccion 123</li>
            <li className='data-item'>Trenque Lauquen, Buenos Aires</li>
        </ul>
    )
}

export default DataContact
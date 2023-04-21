import React from 'react'
import DataContact from './DataContact'

const InfoContact = ({children}) => {
    return (
        <div className='info-contact'>
            {children}
            <div className='list-in-contact'>
                <p>Estamos para ayudarte.</p>
                <p>Brindamos servicios en todo el país.</p>
                <p>Comunicate a través de nuestras distintas vías de contacto.</p>
            </div>
            <DataContact />
        </div>
    )
}

export default InfoContact
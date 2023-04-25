import React from 'react'
import DataContact from './DataContact'

const InfoContact = (props) => {
    return (
        <div className={`info-contact ${props.isActive ? 'active' : ''}`}>
            {props.children}
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
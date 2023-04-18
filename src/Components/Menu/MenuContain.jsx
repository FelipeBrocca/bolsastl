import React from 'react'

const MenuContain = () => {

    const handleClickScroll = (id) => {
        const toScroll = document.getElementById(id)
        if (toScroll) {
            toScroll.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <ul className='nav-list'>
            <li
                id='li-menu1'
                className='nav-item'
                onClick={() => handleClickScroll('products-container')}
            >
                Productos
            </li>
            <li
                id='li-menu2'
                className='nav-item'
                onClick={() => handleClickScroll('company-section')}
            >
                Quiénes somos
            </li>
            <li
                id='li-menu3'
                className='nav-item'
                onClick={() => handleClickScroll('contact-section')}
            >
                Contacto
            </li>
        </ul>
    )
}

export default MenuContain
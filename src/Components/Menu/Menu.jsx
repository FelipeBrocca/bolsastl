import React from 'react'
import './Menu.css'
import MenuContain from './MenuContain'
import DataContact from '../Contact/DataContact'

const Menu = ({ children, toggleMenu }) => {
    return (
        <div className={`menu-container ${toggleMenu ? '' : 'closed'}`}>
            <div className='first-mid-menu'>
                <div className='top-menu'>
                    {children}
                </div>
                <MenuContain />
            </div>
            <div className='bottom-menu'>
               <DataContact />
            </div>
        </div>
    )
}

export default Menu
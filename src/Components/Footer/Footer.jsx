import React from 'react'
import './Footer.css'
import Image from '../Image/Image'
import logo from '../../images/logo-azul.png'
import DataContact from '../Contact/DataContact'
import MenuContain from '../Menu/MenuContain'

const Footer = () => {
  return (
    <footer>
      <div className='top-footer'>
        <div className='nav-footer'>
          <MenuContain />
        </div>
        <div className='data-footer'>
          <DataContact />
        </div>
      </div>
      <div className='bottom-footer'>
        <Image src={logo} alt='logo-footer' className='logo-footer' />
        <p className='effebe-mark'>Desarrollado por <strong>EffeBe</strong></p>
      </div>
    </footer>
  )
}

export default Footer
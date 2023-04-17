import React from 'react'
import Image from '../Image/Image'
import logo from '../../images/logo-blanco 200.png'
import './Loader.css'

const Loader = () => {
  return (
    <div className='loader'>
      <div className='fallback-loader'>
        <Image src={logo} alt='logo-loader' className='logo-loader' />
      </div>
      <h3 className='logo-text'>Bolsas Trenque Lauquen</h3>
    </div>
  )
}

export default Loader
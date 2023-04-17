import React, { useState, useEffect } from 'react'
import logo from '../../images/logo-blanco.png'
import Image from '../Image/Image'
import './Header.css'
import Menu from '../Menu/Menu'
import { useLocation } from 'react-router-dom'

const Header = () => {

  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false)
  const handleToggleMenu = () => {
    setShowMenu(showMenu => !showMenu)
  }

  useEffect(() => {
    if (showMenu) {
      setShowMenu(showMenu => !showMenu)
    }
    // eslint-disable-next-line 
  }, [location.pathname])

  return (
    <>
      <header>
        <div className='logo-container'>
          <Image src={logo} alt='logo-header' className='logo-header-img' />
          <h3>Bolsas Trenque Lauquen</h3>
        </div>
        <div className='menu-header-container'>
          <div className='menu-hamburguer' onClick={handleToggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>
      {
        showMenu ? <div className='backdropPopUp' onClick={handleToggleMenu}></div> : ''
      }
      <Menu
        toggleMenu={showMenu}
      >
        <span onClick={handleToggleMenu} className='close-menu'>X</span>
      </Menu>
    </>
  )
}

export default Header
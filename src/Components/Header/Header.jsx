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
  
  const menu1 = document.getElementById('li-menu1')
  const menu2 = document.getElementById('li-menu2')
  const menu3 = document.getElementById('li-menu3')

  if (menu1 && menu2 && menu3) {
    menu1.addEventListener('click', () => {
      setShowMenu(false)
    })
    menu2.addEventListener('click', () => {
      setShowMenu(false)
    })
    menu3.addEventListener('click', () => {
      setShowMenu(false)
    })
  }

  useEffect(() => {
    if (showMenu) {
      setShowMenu(showMenu => !showMenu)
    }
    // eslint-disable-next-line 
  }, [location.pathname])

const header = document.getElementById('header')
let isScrolling = false;
let scrollTimeout;

window.addEventListener('scroll', function() {
  isScrolling = true;
  if (header) {
    header.style.transform = 'translateY(-100%)'
  }
  
  clearTimeout(scrollTimeout);
  
  scrollTimeout = setTimeout(function() {
    isScrolling = false;
    if (header) {
      header.style.transform = 'translateY(0)'
    }
  }, 300);
});
  

  return (
    <>
      <header id='header'>
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
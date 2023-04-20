import React, { useState, useEffect } from 'react'
import logo from '../../images/logo-blanco.png'
import Image from '../Image/Image'
import './Header.css'
import Menu from '../Menu/Menu'
import { useLocation } from 'react-router-dom'
import MenuContain from '../Menu/MenuContain'

const Header = () => {

  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false)
  const [scrollState, setScrollState] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setScrollState(false);
      } else {
        setScrollState(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.screenY]);


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


  window.addEventListener('scroll', function () {
    isScrolling = true;
    if (header && scrollState) {
      header.style.position = 'absolute'
      header.style.transform = 'translateY(0)'
      header.style.boxShadow = 'none'
    } else if (header && !scrollState) {
      header.style.transform = 'translateY(-100%)'
      header.style.position = 'fixed'
      header.style.boxShadow = '0px 0px 10px 0px black'
    }

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(function () {
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
            <div className='menu-bs'>
               <MenuContain />
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
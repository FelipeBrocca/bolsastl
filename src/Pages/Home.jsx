import React from 'react'
import Carrousel from '../Components/Carrousel/Carrousel'
import Banner from '../Components/Banner/Banner'
import Company from '../Components/Company/Company'
import Contact from '../Components/Contact/Contact'
import Products from '../Components/Products/Products'
import Chosen from '../Components/Company/Chosen'

const Home = () => {
  return (
    <main>
      <Carrousel />
      <Banner />
      <Products />
      <Company />
      <Chosen />
      <Contact />
    </main>
  )
}

export default Home
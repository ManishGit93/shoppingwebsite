import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import ProductList from './components/ProductList'
function App() {
  return (
    <>
      <div className='font-robo'>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <ProductList></ProductList>
      </div>
    </>
  )
}

export default App

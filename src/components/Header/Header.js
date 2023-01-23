import React from 'react'
import Footer from '../Footer/Footer'
import Headline from '../Headline/Headline'
import Main from '../Main/Main'
import Navbar from '../Navbar/Navbar'
import TopBar from '../TopBar/TopBar'

const Header = () => {
  return (
    <header>
      <TopBar />
      <Navbar />
      <Headline />
      <Main />
      <Footer />
    </header>
  )
}

export default Header

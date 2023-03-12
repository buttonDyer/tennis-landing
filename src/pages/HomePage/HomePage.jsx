import React from 'react'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer/Footer'

import mainBg from '../../images/mainBg.png'

function HomePage() {
  return (
    <div>
      <Header />
      <Banner
        img={mainBg}
        title="Петербургский теннисный клуб имени М.А. Пасечникова"
      />
      <div>Hello from Home Page</div>
      <Footer />
    </div>
  )
}

export default HomePage

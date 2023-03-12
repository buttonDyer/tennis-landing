import React from 'react'

import Header from '../../components/Header'
import MainBanner from '../../components/MainBanner'
import InfoCardsGrid from '../../components/InfoCardsGrid'
import SportClub from '../../components/SportClub'
import CoachSlider from '../../components/CoachSlider'
import Footer from '../../components/Footer/Footer'

import mainBg from '../../images/mainBg.png'
import sportClubImg from '../../images/sportClub.png'

function HomePage() {
  return (
    <div>
      <Header />
      <MainBanner
        img={mainBg}
        title="Петербургский теннисный клуб имени М.А. Пасечникова"
      />
      <InfoCardsGrid />
      <SportClub img={sportClubImg} />
      <CoachSlider />
      <Footer />
    </div>
  )
}

export default HomePage

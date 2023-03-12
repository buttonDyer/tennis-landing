import React from 'react'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Slider from '../../components/Slider'
import AboutClub from '../../components/AboutClub'
import Footer from '../../components/Footer/Footer'

import bgImg from '../../images/aboutBg.png'
import aboutImg from '../../images/aboutImg.png'

import s from './AboutPage.module.scss'

function AboutPage() {
  return (
    <div className={s.AboutClub}>
      <div className={s.container}>
        <Header />
        <Banner img={bgImg} title="О клубе" />
        <Slider />
        <AboutClub img={aboutImg} />
        <Footer />
      </div>
    </div>
  )
}

export default AboutPage

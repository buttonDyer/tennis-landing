import React from 'react'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Slider from '../../components/Slider'
import ClubGrid from '../../components/ClubGrid'
import Footer from '../../components/Footer/Footer'

import bgImg from '../../images/aboutBg.png'
import aboutImg from '../../images/aboutImg.png'

import s from './AboutPage.module.scss'

function AboutPage() {
  return (
    <div className={s.aboutPage}>
      <div className={s.container}>
        <Header />
        <Banner img={bgImg} title="О клубе" />
        <Slider />
        <ClubGrid img={aboutImg} />
        <Footer />
      </div>
    </div>
  )
}

export default AboutPage

import React from 'react'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import NewsGrid from '../../components/NewsGrid'
import Footer from '../../components/Footer/Footer'

import newsBg from '../../images/newsBg.png'

import s from './NewsPage.module.scss'

function NewsPage() {
  return (
    <div>
      <Header />
      <Banner img={newsBg} title="Новости" />
      <NewsGrid />
      <Footer />
    </div>
  )
}

export default NewsPage

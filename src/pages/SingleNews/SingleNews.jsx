import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import NewsDescription from '../../components/NewsDescription'
import NewsGrid from '../../components/NewsGrid'
import Footer from '../../components/Footer/Footer'

import newsBg from '../../images/newsBg.png'

import s from './SingleNews.module.scss'

function SingleNews() {
  const { newsId } = useParams()
  const [posts, setPosts] = useState([])

  const endpoint = 'http://localhost:3001'

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${endpoint}/posts/${newsId}`)
      const data = await res.json()
      setPosts(data)
    }
    fetchData()
  }, [newsId])

  return (
    <div>
      <Header />
      <Banner img={newsBg} title="Новости" />
      <NewsDescription
        img={posts.image}
        text={posts.title}
        description={posts.description}
      />
      <NewsGrid />
      <Footer />
    </div>
  )
}

export default SingleNews

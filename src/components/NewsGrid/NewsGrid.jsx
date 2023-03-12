import React, { useEffect, useState } from 'react'

import NewsCard from '../NewsCard'

import s from './NewsGrid.module.scss'

function NewsGrid() {
  const [posts, setPosts] = useState([])

  const endpoint = 'http://localhost:3001'

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${endpoint}/posts`)
      const data = await res.json()
      setPosts(data)
    }
    fetchData()
  }, [])

  return (
    <div className={s.newsGrid}>
      <div className={s.container}>
        <div className={s.grid}>
          {posts.map((elem) => (
            <NewsCard
              img={elem.image}
              text={elem.title}
              key={elem.id}
              id={elem.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsGrid

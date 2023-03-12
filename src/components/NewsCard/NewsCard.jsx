import React from 'react'
import { Link } from 'react-router-dom'

import s from './NewsCard.module.scss'

function NewsCard({ id, img, text }) {
  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <img className="fill" src={img} alt="" />
      </div>
      <div className={s.text}>{text}</div>
      <Link className={s.button} to={`/news/${id}`}>
        Подробнее
      </Link>
    </div>
  )
}

export default NewsCard

import React from 'react'

import s from './NewsDescription.module.scss'

function NewsDescription({ img, text, description }) {
  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <img className="fill" src={img} alt="" />
      </div>
      <div className={s.textWrapper}>
        <div className={s.text}>{text}</div>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  )
}

export default NewsDescription

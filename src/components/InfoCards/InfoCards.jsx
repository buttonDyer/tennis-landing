import React from 'react'

import s from './InfoCards.module.scss'

function InfoCards(infoCardProp) {
  return (
    <div className={s.card}>
      <div className={s.wrapper}>
        <div className={s.imageWrapper}>
          <img src={infoCardProp.img} alt={infoCardProp.text} />
        </div>
        <p>{infoCardProp.text}</p>
      </div>
    </div>
  )
}

export default InfoCards

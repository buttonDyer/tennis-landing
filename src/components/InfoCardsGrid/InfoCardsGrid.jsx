import React from 'react'

import InfoCards from '../../components/InfoCards'

import s from './InfoCardsGrid.module.scss'

import imgCard1 from '../../images/imgCard1.png'
import imgCard2 from '../../images/imgCard2.png'
import imgCard3 from '../../images/imgCard3.png'

function InfoCardsGrid() {
  const infoCards = [
    {
      id: 1,
      img: imgCard1,
      text: '5 летних грунтовых кортов',
    },
    {
      id: 2,
      img: imgCard2,
      text: 'Зал с покрытием “Искусственная трава”',
    },
    {
      id: 3,
      img: imgCard3,
      text: 'Зал с покрытием “Хард”',
    },
  ]

  return (
    <>
      <div className={s.InfoCardsGrid}>
        <div className={s.container}>
          <div className={s.grid}>
            {infoCards.map((card) => (
              <InfoCards text={card.text} img={card.img} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoCardsGrid

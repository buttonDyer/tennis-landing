import React from 'react'

import s from './Banner.module.scss'

function Banner(aboutClubProp) {
  return (
    <div
      className={s.banner}
      style={{ backgroundImage: `url(${aboutClubProp.img}` }}
    >
      <div className={s.container}>
        <div className={s.titleWrapper}>
          <p className={s.title}>{aboutClubProp.title}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner

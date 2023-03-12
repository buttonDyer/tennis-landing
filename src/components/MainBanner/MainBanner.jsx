import React from 'react'

import s from './MainBanner.module.scss'

function MainBanner(mainPageProp) {
  return (
    <div
      className={s.banner}
      style={{ backgroundImage: `url(${mainPageProp.img}` }}
    >
      <div className={s.container}>
        <div className={s.titleWrapper}>
          <p className={s.title}>{mainPageProp.title}</p>
        </div>
        <div className={s.servicesWrapper}>
          <div className={s.service}>
            <p className={s.microTitle}>Услуги</p>
            <p className={s.serviceName}>Аренда корта</p>
          </div>
          <div className={s.service}>
            <p className={s.microTitle}>Услуги</p>
            <p className={s.serviceName}>Детский теннис</p>
          </div>
          <div className={s.service}>
            <p className={s.microTitle}>Услуги</p>
            <p className={s.serviceName}>Сборы команд</p>
          </div>
          <div className={s.service}>
            <p className={s.microTitle}>Услуги</p>
            <p className={s.serviceName}>Расписание</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner

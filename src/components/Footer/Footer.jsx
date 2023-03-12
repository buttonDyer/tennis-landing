import React from 'react'

import s from './Footer.module.scss'

import { AiOutlineYoutube, AiFillTwitterCircle } from 'react-icons/ai'

import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.footerWrapper}>
          <p className={s.copyright}>2022 © Все права защищены.</p>
          <div className={s.links}>
            <Link className={s.link} to="/">
              Главная
            </Link>
            <Link className={s.link} to="/about">
              О клубе
            </Link>
            <Link className={s.link} to="/news">
              Новости
            </Link>
          </div>
          <div className={s.iconsWrapper}>
            <AiOutlineYoutube className={s.icon} />
            <AiFillTwitterCircle className={s.icon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

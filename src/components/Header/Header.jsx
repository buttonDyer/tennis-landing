import React from 'react'

import logo from '../../images/Logo.svg'

import { AiOutlineYoutube, AiFillTwitterCircle } from 'react-icons/ai'

import s from './Header.module.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.headerWrapper}>
          <div className={s.logoWrapper}>
            <Link to="/">
              <img className="fill" src={logo} alt="logo" />
            </Link>
          </div>
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

export default Header

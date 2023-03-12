import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import cort1 from '../../images/cort.jpg'
import cort2 from '../../images/cort2.jpg'
import cort3 from '../../images/cort3.jpg'

import s from './Slider.module.scss'

import 'swiper/css'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

function Slider() {
  const [swiper, setSwiper] = useState(null)

  const slide = (isNext) => {
    if (isNext) {
      swiper.slideNext()
    } else {
      swiper.slidePrev()
    }
  }

  return (
    <div className={s.slider}>
      <div className={s.container}>
        <div className={s.topPart}>
          <div className="title">Фото кортов</div>
          <div className={s.buttons}>
            <button
              className={s.button}
              type="button"
              onClick={() => slide(false)}
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              className={s.button}
              type="button"
              onClick={() => slide(true)}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div className={s.sliderWrapper}>
          <Swiper
            onSwiper={(instance) => setSwiper(instance)}
            className={s.swiper}
            spaceBetween={10}
            loop
          >
            <SwiperSlide>
              <div className={s.slide}>
                <div className={s.imageWrapper}>
                  <img src={cort1} className={s.image} alt="cort" />
                </div>
              </div>
              <div className={s.slideDescription}>Летний корт</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.slide}>
                <div className={s.imageWrapper}>
                  <img src={cort2} className={s.image} alt="cort" />
                </div>
              </div>
              <div className={s.slideDescription}>Летний корт</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.slide}>
                <div className={s.imageWrapper}>
                  <img src={cort3} className={s.image} alt="cort" />
                </div>
              </div>
              <div className={s.slideDescription}>Летний корт</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Slider

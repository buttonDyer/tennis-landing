import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import coach1 from '../../images/coach1.png'
import coach2 from '../../images/coach2.png'
import coach3 from '../../images/coach3.png'
import coach4 from '../../images/coach4.png'
import coach5 from '../../images/coach5.png'
import coach6 from '../../images/coach6.png'

import s from './CoachSlider.module.scss'

import 'swiper/css'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import { FreeMode, Pagination } from 'swiper'

function CoachSlider() {
  const [swiper, setSwiper] = useState(null)

  const slide = (isNext) => {
    if (isNext) {
      swiper.slideNext()
    } else {
      swiper.slidePrev()
    }
  }

  return (
    <div className={s.coachSlider}>
      <div className={s.container}>
        <div className={s.topPart}>
          <div className="title">Тренерский состав</div>
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
            className={s.swiper}
            onSwiper={(instance) => setSwiper(instance)}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            slidesPerView={6}
            spaceBetween={30}
            modules={[FreeMode, Pagination]}
          >
            <SwiperSlide>
              <div className={s.slide}>
                <div className={s.imageWrapper}>
                  <img src={coach1} className={s.image} alt="cort" />
                </div>
                <div className={s.textWrapper}>
                  <p className={s.coachName}>Pulvinar aliquam</p>
                  <p className={s.coachDescription}>
                    Arcu elit massa amet turpis vel consequat pellentesque sit.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.slide}>
                <div className={s.imageWrapper}>
                  <img src={coach2} className={s.image} alt="cort" />
                </div>
                <div className={s.textWrapper}>
                  <p className={s.coachName}>Pretium odio</p>
                  <p className={s.coachDescription}>
                    Bibendum aliquam volutpat nisl a duis in nisi. In sed
                    commodo lorem morbi quis.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.slide}>
                <div className={s.imageWrapper}>
                  <img src={coach3} className={s.image} alt="cort" />
                </div>
                <div className={s.textWrapper}>
                  <p className={s.coachName}>Aliquet consectetur</p>
                  <p className={s.coachDescription}>
                    Id sapien sed nibh fermentum massa posuere ipsum. Diam in.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.slide}>
                <div className={s.imageWrapper}>
                  <img src={coach4} className={s.image} alt="cort" />
                </div>
                <div className={s.textWrapper}>
                  <p className={s.coachName}>Blandit augue</p>
                  <p className={s.coachDescription}>
                    Scelerisque accumsan pretium justo, vitae elit. Dolor semper
                    morbi sit auctor vel diam eros.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.slide}>
                <div className={s.imageWrapper}>
                  <img src={coach5} className={s.image} alt="cort" />
                </div>
                <div className={s.textWrapper}>
                  <p className={s.coachName}>Lorem lacus</p>
                  <p className={s.coachDescription}>
                    Adipiscing amet, viverra dignissim egestas. Sed nibh egestas
                    venenatis faucibus.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.slide}>
                <div className={s.imageWrapper}>
                  <img src={coach6} className={s.image} alt="cort" />
                </div>
                <div className={s.textWrapper}>
                  <p className={s.coachName}>Sed erat</p>
                  <p className={s.coachDescription}>
                    Quis ullamcorper pretium lacus risus tellus dolor etiam.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.slide}>
                <div className={s.imageWrapper}>
                  <img src={coach1} className={s.image} alt="cort" />
                </div>
                <div className={s.textWrapper}>
                  <p className={s.coachName}>Pulvinar aliquam</p>
                  <p className={s.coachDescription}>
                    Arcu elit massa amet turpis vel consequat pellentesque sit.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.slide}>
                <div className={s.imageWrapper}>
                  <img src={coach2} className={s.image} alt="cort" />
                </div>
                <div className={s.textWrapper}>
                  <p className={s.coachName}>Pretium odio</p>
                  <p className={s.coachDescription}>
                    Bibendum aliquam volutpat nisl a duis in nisi. In sed
                    commodo lorem morbi quis.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.slide}>
                <div className={s.imageWrapper}>
                  <img src={coach3} className={s.image} alt="cort" />
                </div>
                <div className={s.textWrapper}>
                  <p className={s.coachName}>Aliquet consectetur</p>
                  <p className={s.coachDescription}>
                    Id sapien sed nibh fermentum massa posuere ipsum. Diam in.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.slide}>
                <div className={s.imageWrapper}>
                  <img src={coach4} className={s.image} alt="cort" />
                </div>
                <div className={s.textWrapper}>
                  <p className={s.coachName}>Blandit augue</p>
                  <p className={s.coachDescription}>
                    Scelerisque accumsan pretium justo, vitae elit. Dolor semper
                    morbi sit auctor vel diam eros.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.slide}>
                <div className={s.imageWrapper}>
                  <img src={coach5} className={s.image} alt="cort" />
                </div>
                <div className={s.textWrapper}>
                  <p className={s.coachName}>Lorem lacus</p>
                  <p className={s.coachDescription}>
                    Adipiscing amet, viverra dignissim egestas. Sed nibh egestas
                    venenatis faucibus.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.slide}>
                <div className={s.imageWrapper}>
                  <img src={coach6} className={s.image} alt="cort" />
                </div>
                <div className={s.textWrapper}>
                  <p className={s.coachName}>Sed erat</p>
                  <p className={s.coachDescription}>
                    Quis ullamcorper pretium lacus risus tellus dolor etiam.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default CoachSlider

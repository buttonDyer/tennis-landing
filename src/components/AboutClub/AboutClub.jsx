import React from 'react'

import s from './AboutClub.module.scss'

function AboutClub({ img }) {
  return (
    <div className={s.AboutClub}>
      <div className={s.container}>
        <div className={s.mainTitle}>О клубе</div>
        <div className={s.wrapper}>
          <div className={s.imageWrapper}>
            <img className={`fill ${s.image}`} src={img} alt="" />
          </div>
          <div className={s.textWrapper}>
            <div className={s.textTitle}>
              Петербургский теннисный клуб имени М.А. Пасечникова
            </div>
            <div className={s.textDescription}>
              <p>
                Feugiat gravida proin arcu tellus ipsum posuere nisl,
                consectetur scelerisque. Posuere ipsum tellus dignissim etiam
                lorem ultrices risus viverra. Purus volutpat phasellus viverra
                vestibulum quis. Gravida pretium odio enim ut id tempus semper.
                Urna cum at in iaculis mauris at. Tellus, a euismod tincidunt eu
                orci faucibus. Mi faucibus pellentesque molestie nunc, et,
                tellus. Neque cras mattis dolor id. Maecenas vivamus tristique
                donec neque id convallis. Feugiat fusce at est at.
              </p>
              <p>
                Vitae nec eget blandit id nisl. Sit ac dictum lorem mauris
                posuere sit. Gravida commodo egestas pharetra, mi interdum.
                Ullamcorper pulvinar hac risus egestas fusce nunc. Vel auctor
                proin integer ut lacus, sed neque id dictum. At enim quis eu,
                mattis aliquet varius in eu venenatis.
              </p>
              <p>
                Quisque diam elit donec orci sed dolor. Neque sed sit tortor
                eget urna magna interdum feugiat ut. In purus rhoncus egestas
                euismod morbi. Ut velit facilisi in cras tempus turpis sapien
                ipsum, mattis. Tempor sit nulla ac lorem placerat congue. Nulla
                purus vestibulum suscipit pellentesque risus non.
              </p>
            </div>
            <div className={s.stats}>
              <p className={s.statsNumber}>7</p>
              <p className={s.statsText}>Летних грунтовых кортов</p>
              <p className={s.statsNumber}>4</p>
              <p className={s.statsText}>
                Зимних корта с покрытием «искусственная трава»
              </p>
              <p className={s.statsNumber}>3</p>
              <p className={s.statsText}>Зимних корта с покрытием «hard»</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutClub

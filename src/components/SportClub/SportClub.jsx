import React from 'react'

import s from './SportClub.module.scss'

function SportClub({ img }) {
  return (
    <div className={s.sportClub}>
      <div className={s.container}>
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
                Imperdiet lorem ipsum, pulvinar aliquet sit ultricies in sit
                turpis. Ultricies erat pretium risus quam tincidunt non viverra
                porttitor. Sollicitudin enim nunc in nisi donec vel. Blandit
                mauris vitae amet aliquet ultrices mauris pellentesque. Non
                ipsum commodo, sit mi sit netus aenean nisl. Donec sit
                pellentesque enim, vestibulum.
              </p>
              <p>
                Condimentum hac adipiscing purus in augue nisi. Convallis ut
                nisi.
              </p>
            </div>
            <div className={s.textSecondaryTitle}>
              Ornare orci ut dictum nulla fames.
            </div>
            <ul className={s.list}>
              <li>
                <div></div>
                Euismod diam, vel venenatis bibendum sodales sem hendrerit
                vulputate sagittis.
              </li>
              <li>
                <div></div>
                Nisl senectus sed malesuada donec. Interdum malesuada bibendum
                imperdiet elementum auctor vitae in.
              </li>
              <li>
                <div></div>
                Quam purus ornare dictum pharetra. Sed viverra tellus
                sollicitudin urna, sagittis.
              </li>
              <li>
                <div></div>
                Scelerisque urna senectus commodo, nam. Donec nibh tempus
                imperdiet nisi, tincidunt mus egestas nisl nullam.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SportClub

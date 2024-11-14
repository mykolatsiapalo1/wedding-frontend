/* eslint-disable @next/next/no-img-element */
'use client'
import Header from '../header/Header'
import styles from '../landing.module.css'
import useIsMobile from '@/app/hooks/useIsMobile'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Slide1 = () => {
  const isMobile = useIsMobile()

  return (
    <>
      <Header />

      <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>
        <div className={styles.container}>
          <span className={styles.r}>
            <img src="/Vector1.svg" alt="photo1" />
            <img src="/Vector2.svg" alt="photo2" />
          </span>
          <div>
            <p className={styles.bigText}>Overwhelmed</p>
            <p className={styles.bigText + ' ' + styles.nowrap}>
              by Wedding&nbsp;
              <span className={styles.d}>
                <img src="/Vector1.svg" alt="photo1" />
                <img src="/Vector2.svg" alt="photo2" />
              </span>
              {!isMobile && <br />}
              Planning?
            </p>

            <p style={{ marginTop: '27px' }}>
              Our customizable templates simplify the proccess, <br />
              so you can focus on enjoying your big day!
            </p>

            <button style={isMobile ? { marginTop: '42px' } : {}} className={styles.btnGetStarted}>
              Get Started
            </button>
            <p
              style={isMobile ? { marginTop: '27px', textAlign: 'center' } : { marginTop: '36px' }}
              className={styles.miniTextsmallText2}
            >
              Start Planning the perfect day Now!
            </p>
          </div>
          {!isMobile && (
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div>
                  <p className={styles.mediumText}>
                    Wedding
                    <br />
                    Planners
                  </p>
                  <br />
                  <p className={styles.smallText}>Elegant Design, Effortless Planning...</p>
                </div>
                <img src="/Vector3.svg" alt="photo3" className={styles.imgPosition} />
              </div>

              <div style={{ marginRight: '300px' }} className={styles.card}>
                <div>
                  <p className={styles.mediumText}>
                    Invitationsbr <br /> Templates
                  </p>
                  <br />
                  <p className={styles.smallText}>Say ‘You’re Invited’ in the Style You Love...</p>
                </div>
                <img src="/Vector4.svg" alt="photo4" className={styles.imgPosition} />
              </div>

              <div className={styles.card}>
                <div>
                  <p className={styles.mediumText}>
                    More Wedding <br /> Templates Await
                  </p>
                  <br />
                  <p className={styles.smallText}>
                    So Many Wedding Templates Beyond Expectations...
                  </p>
                </div>
                <img src="/Vector5.svg" alt="photo5" className={styles.imgPosition} />
              </div>
            </div>
          )}
          {isMobile && (
            <>
              <Swiper spaceBetween={30} style={{ zIndex: 0, marginTop: '50px' }}>
                <div className={styles.cardContainer}>
                  <SwiperSlide>
                    <div className={styles.card}>
                      <img src="/Vector3.svg" alt="icon" className={styles.imgPosition} />
                      <div style={{ marginTop: '15px' }}>
                        <p className={styles.bigText}>Wedding Planners</p>
                        <br />
                        <p className={styles.smallText}>Elegant Design, Effortless Planning...</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className={styles.card}>
                      <img src="/Vector4.svg" alt="icon" className={styles.imgPosition} />
                      <div style={{ marginTop: '15px' }}>
                        <p className={styles.bigText}>Invitations Templates</p>
                        <br />
                        <p className={styles.smallText}>
                          Say ‘You’re Invited’ in the Style You Love...
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className={styles.card}>
                      <img src="/Vector5.svg" alt="icon" className={styles.imgPosition} />
                      <div style={{ marginTop: '15px' }}>
                        <p className={styles.bigText}>More Wedding Templates Await</p>
                        <br />
                        <p className={styles.smallText}>
                          So Many Wedding Templates Beyond Expectations...
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
              <br />
              <br />
              <br />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Slide1

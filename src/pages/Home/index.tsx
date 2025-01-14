import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'

import Section from '@/components/Section'
import SectionWrapper from '@/components/SectionWrapper'

import homePageImage from '@/assets/images/photos/homePage.png'

import { useTheme } from '@/context/ThemeContext'

//@ts-ignore
import 'swiper/css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const Home: FC = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <>
      <SectionWrapper>
        <Section
          className={`flex flex-row justify-between items-start rounded-3xl ${theme === 'dark' ? 'bg-dark-section' : 'bg-light-section'}`}
        >
          <div>
            <h1 className="text-4xl leading-8">
              {t('home.t1')}&nbsp;Łukasz&nbsp;👋
            </h1>
            <p className="max-w-60 text-lg mt-2">{t('home.p11')}</p>
          </div>
          <img
            src={homePageImage}
            alt="Łukasz Tołwiński"
            className="w-64 overflow-auto"
          />
        </Section>
        <Section>
          <h1 className="text-4xl text-center mb-6">{t('home.t2')}</h1>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={25}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
          </Swiper>
        </Section>
      </SectionWrapper>
    </>
  )
}

export default Home

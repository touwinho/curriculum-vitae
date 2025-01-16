import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'

import Section from '@/components/Section'
import SectionWrapper from '@/components/SectionWrapper'

import { logos } from '@/assets/images/logos'
import homePageImage from '@/assets/images/photos/homePage.png'

import { useTheme } from '@/context/ThemeContext'

//@ts-ignore
import 'swiper/css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const Home: FC = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <SectionWrapper>
      <Section
        className={`flex flex-row justify-between min-h-80 mt-32 rounded-3xl relative ${theme === 'dark' ? 'bg-dark-section' : 'bg-light-section'}`}
      >
        <div className="flex flex-col w-[60%]">
          <h1 className="text-4xl leading-8 mb-4 absolute top-8 left-8">
            {t('home.t1')}&nbsp;Łukasz&nbsp;👋
          </h1>
          <p className="max-w-64 text-lg my-auto">{t('home.p11')}</p>
        </div>
        <img
          src={homePageImage}
          alt="Łukasz Tołwiński"
          className="w-64 min-w-44 overflow-auto translate-y-8 self-end absolute right-5"
        />
      </Section>
      <Section
        className={`rounded-3xl mt-24 ${theme === 'dark' ? 'bg-dark-section' : 'bg-light-section'}`}
      >
        <h1 className="text-4xl text-center mb-6">{t('home.t2')}</h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={60}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {logos.map(({ name, alt, link }, index) => (
            <SwiperSlide key={index} className="self-center">
              <a href={link} target="_blank" rel="noreferrer">
                <img src={name} alt={alt} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </SectionWrapper>
  )
}

export default Home

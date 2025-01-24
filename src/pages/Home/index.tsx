import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
//@ts-ignore
import 'swiper/css'
import Section from '@/components/Section'
import SectionWrapper from '@/components/SectionWrapper'
import { logos } from '@/assets/images/logos'
import homePageImage from '@/assets/images/photos/homePage.png'

const Home: FC = () => {
  const { t } = useTranslation()

  return (
    <SectionWrapper>
      <Section className="flex md:flex-row flex-col relative justify-between min-h-80">
        <div className={clsx('flex flex-col w-full', 'md:w-[60%]')}>
          <h1 className="text-3xl mb-4">{t('home.t1')}&nbsp;Łukasz&nbsp;👋</h1>
          <p className={clsx('text-lg', 'md:max-w-64')}>{t('home.p11')}</p>
        </div>
        <img
          src={homePageImage}
          alt="Łukasz Tołwiński"
          className={clsx(
            'w-48 translate-y-4 self-center select-none',
            'md:absolute md:w-64 md:translate-y-0 md:bottom-0 md:right-5 md:select-none',
          )}
        />
      </Section>
      <Section>
        <h1 className={clsx('text-3xl text-center mb-2', 'md:mb-6')}>
          {t('home.t2')}
        </h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            370: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            660: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {logos.map(({ name, alt, link }) => (
            <SwiperSlide key={name} className="self-center select-none">
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

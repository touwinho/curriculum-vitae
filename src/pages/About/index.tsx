import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Section from '@/components/Section'
import SectionWrapper from '@/components/SectionWrapper'
import Counter from '@/components/Counter'
import Button from '@/components/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
//@ts-ignore
import 'swiper/css'
import { technologies } from '@/assets/images/technologies'

const About: FC = () => {
  const { t } = useTranslation()

  const experienceStartDate = new Date(2019, 1)
  const currentDate = new Date()
  const diffTime = Math.abs(
    currentDate.getTime() - experienceStartDate.getTime(),
  )
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25))
  const projectsBreakpoint = 11

  return (
    <SectionWrapper>
      <Section>
        <div className="flex flex-col md:flex-row gap-9 justify-center">
          <Counter
            title={t('about.c11')}
            targetCount={diffYears}
            duration={250 * diffYears}
          />
          <Counter
            title={t('about.c12')}
            targetCount={projectsBreakpoint}
            duration={120 * projectsBreakpoint}
            formatCount={(count) =>
              count >= projectsBreakpoint ? '10+' : count.toString()
            }
          />
          <Counter title={t('about.c13')} targetCount={4} duration={250 * 5} />
        </div>
      </Section>
      <Section title={t('about.t2')}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            370: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            660: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {technologies.map(({ name, alt, link }) => (
            <SwiperSlide key={name} className="select-none">
              <a href={link} target="_blank">
                <img className="h-24" src={name} alt={alt} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
      <Section title={t('about.t3')} className="flex flex-col items-center">
        <Button>
          <a className="text-2xl" href="/cv-tolwinski-lukasz.pdf" download>
            {t('about.b31')}
          </a>
        </Button>
      </Section>
    </SectionWrapper>
  )
}

export default About

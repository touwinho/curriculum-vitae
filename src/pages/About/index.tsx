import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Section from '@/components/Section'
import SectionWrapper from '@/components/SectionWrapper'
import Counter from '@/components/Counter'

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
            title={t('about.c1')}
            targetCount={diffYears}
            duration={250 * diffYears}
          />
          <Counter
            title={t('about.c2')}
            targetCount={projectsBreakpoint}
            duration={120 * projectsBreakpoint}
            formatCount={(count) =>
              count >= projectsBreakpoint ? '10+' : count.toString()
            }
          />
        </div>
      </Section>
      <Section>
        <h1>{t('about.title')}</h1>
        <p>{t('about.description')}</p>
        <a
          href="/cv-tolwinski-lukasz.pdf"
          download
          className="mt-4 inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          {t('about.downloadResume')}
        </a>
      </Section>
    </SectionWrapper>
  )
}

export default About

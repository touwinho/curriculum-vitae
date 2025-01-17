import Section from '@/components/Section'
import SectionWrapper from '@/components/SectionWrapper'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const About: FC = () => {
  const { t } = useTranslation()

  return (
    <SectionWrapper>
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

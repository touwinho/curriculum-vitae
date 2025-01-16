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
      </Section>
    </SectionWrapper>
  )
}

export default About

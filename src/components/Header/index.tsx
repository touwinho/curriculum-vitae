import React from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { LanguageSelect } from '@/components/LanguageSelect'
import { NavButton } from '../NavButton/NavButton'

export const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <header className="flex justify-between items-center">
      <NavButton title="<ŁT />" path="/" />
      <div className="flex items-center">
        <nav>
          <NavButton title={t('home.title')} path="/" />
          <NavButton title={t('about.title')} path="/about" />
          <NavButton title={t('contact.title')} path="/contact" />
        </nav>
        <div className="flex items-center">
          <ThemeSwitch />
          <LanguageSelect />
        </div>
      </div>
    </header>
  )
}

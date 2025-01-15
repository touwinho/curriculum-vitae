import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import LanguageSelect from '@/components/LanguageSelect'
import Logo from '@/components/Logo'
import NavButton from '@/components/NavButton'
import ThemeSwitch from '@/components/ThemeSwitch'

const Header: FC = () => {
  const { t } = useTranslation()

  return (
    <header className="flex justify-between items-center mx-5">
      <Logo />
      <div className="flex items-center">
        <nav>
          <NavButton title={t('home.nav')} path="/" />
          <NavButton title={t('about.nav')} path="/about" />
          <NavButton title={t('contact.nav')} path="/contact" />
        </nav>
        <div className="flex items-center">
          <ThemeSwitch />
          <LanguageSelect />
        </div>
      </div>
    </header>
  )
}

export default Header

import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

import LanguageSwitch from '@/components/LanguageSwitch'
import Logo from '@/components/Logo'
import NavButton from '@/components/NavButton'
import ThemeSwitch from '@/components/ThemeSwitch'
import HamburgerButton from '../HamburgerButton'
import HamburgerMenu from '../HamburgerMenu'

const Header: FC = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={clsx('flex items-center justify-between mx-3', 'md:mx-8')}
    >
      <Logo />
      <div className="flex items-center">
        <nav className={clsx('hidden text-xl mr-6', 'md:flex')}>
          <NavButton title={t('home.nav')} path="/" />
          <NavButton title={t('about.nav')} path="/about" />
          {/* <NavButton title={t('contact.nav')} path="/contact" /> */}
          {/* Uncomment if you have finished contact page */}
        </nav>
        <div className="flex items-center">
          <LanguageSwitch />
          <ThemeSwitch />
          <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </div>
      <HamburgerMenu isOpen={isOpen} closeMenu={closeMenu} />
    </header>
  )
}

export default Header

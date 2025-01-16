import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import LanguageSelect from '@/components/LanguageSelect'
import Logo from '@/components/Logo'
import NavButton from '@/components/NavButton'
import ThemeSwitch from '@/components/ThemeSwitch'
import { useTheme } from '@/context/ThemeContext'

const Header: FC = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  const { theme } = useTheme()

  return (
    <header className="flex justify-between items-center mx-5">
      <Logo />
      <div className="flex items-center">
        <nav className="hidden md:flex">
          <NavButton title={t('home.nav')} path="/" />
          <NavButton title={t('about.nav')} path="/about" />
          <NavButton title={t('contact.nav')} path="/contact" />
        </nav>
        <div className="flex items-center">
          <LanguageSelect />
          <ThemeSwitch />
          <button
            className="md:hidden ml-6 relative z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isOpen ? 'transform rotate-60' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
              <path
                className={`transition-opacity duration-300 ${
                  isOpen ? 'opacity-100' : 'opacity-0'
                }`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 w-full h-full shadow-lg z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${theme === 'dark' ? 'bg-dark-section' : 'bg-light-section'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full text-4xl gap-20">
          <NavButton title={t('home.nav')} path="/" onClick={closeMenu} />
          <NavButton title={t('about.nav')} path="/about" onClick={closeMenu} />
          <NavButton
            title={t('contact.nav')}
            path="/contact"
            onClick={closeMenu}
          />
        </nav>
      </div>
    </header>
  )
}

export default Header

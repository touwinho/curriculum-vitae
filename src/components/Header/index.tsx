import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useTheme from '@/hooks/useTheme'

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const { i18n, t } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
  }

  return (
    <header>
      <nav className="flex justify-between items-center">
        <div>
          <Link to="/" className="mr-4">
            {t('header.home')}
          </Link>
          <Link to="/about">{t('header.about')}</Link>
        </div>
        <div>
          <button onClick={toggleTheme} className="mr-4">
            {theme === 'light' ? 'dark' : 'light'} mode
          </button>
          <button onClick={() => changeLanguage('en')} className="mr-2">
            EN
          </button>
          <button onClick={() => changeLanguage('pl')}>PL</button>
        </div>
      </nav>
    </header>
  )
}

export default Header

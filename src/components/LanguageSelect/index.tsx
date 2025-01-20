import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import PlFlag from '@/assets/images/locales/pl-flag.svg'
import EnFlag from '@/assets/images/locales/en-flag.svg'
import { useTheme } from '@/context/ThemeContext'

const LanguageSelect: FC = () => {
  const { i18n } = useTranslation()
  const { theme } = useTheme()
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
    document.documentElement.lang = i18n.language
  }

  const isPolish = i18n.language === 'pl'
  const textClass = theme === 'dark' ? 'text-dark-text' : 'text-light-text'
  const positionClass = isPolish ? 'translate-x-[28px]' : 'translate-x-0'

  return (
    <label className="relative inline-flex items-center cursor-pointer ml-6 select-none">
      <input
        type="checkbox"
        checked={isPolish}
        onChange={() => changeLanguage(isPolish ? 'en' : 'pl')}
        className="sr-only"
      />
      <span
        className={`flex h-8 w-[60px] items-center p-1 rounded-full ${
          theme === 'dark' ? 'bg-dark-section' : 'bg-light-section'
        }`}
      >
        <span className="absolute left-2 text-base font-bold">
          <span className={textClass}>PL</span>
        </span>
        <span className="absolute right-2 text-base font-bold">
          <span className={textClass}>EN</span>
        </span>
        <span
          className={`h-6 w-6 rounded-full ease-in-out duration-300 flex items-center justify-center transform ${positionClass}`}
        >
          <div
            className={`w-6 h-6 rounded-full ${
              theme === 'dark' ? 'bg-dark-background' : 'bg-light-background'
            }`}
          >
            <img
              src={isPolish ? PlFlag : EnFlag}
              alt={isPolish ? 'Poland Flag' : 'En/US Flag'}
              className="w-4 h-full select-none z-10 m-auto"
              style={{
                transition: 'none',
              }}
            />
          </div>
        </span>
      </span>
    </label>
  )
}

export default LanguageSelect

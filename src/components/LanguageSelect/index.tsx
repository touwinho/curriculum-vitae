import { FC, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useTheme } from '@/context/ThemeContext'

import EnFlag from '@/assets/images/locales/en-flag.svg'
import PolandFlag from '@/assets/images/locales/pl-flag.svg'

const LanguageSelect: FC = () => {
  const { i18n } = useTranslation()
  const { theme } = useTheme()
  const currentLanguage = i18n.language
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
    setIsOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <div className="relative inline-block text-left ml-6" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className={`inline-flex items-center justify-center w-16 rounded-full border shadow-sm px-2 py-1 text-l focus:outline-none transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-dark-background text-dark-text border-dark-border hover:bg-dark-hover'
              : 'bg-light-background text-light-text border-light-border hover:bg-light-hover'
          }`}
          onClick={toggleDropdown}
        >
          {currentLanguage === 'pl' ? (
            <img
              src={PolandFlag}
              alt="Poland Flag"
              className="w-5 h-5 mr-2 rounded-full border-[1px] border-zinc-400 my-auto"
            />
          ) : (
            <img
              src={EnFlag}
              alt="En/US Flag"
              className="w-5 h-5 mr-2 rounded-full border-[1px] border-zinc-400 my-auto"
            />
          )}
          {currentLanguage.toUpperCase()}
        </button>
      </div>

      {isOpen && (
        <div
          className={`origin-top-right absolute right-0 mt-2 rounded-full shadow-lg ring-1 ring-black ring-opacity-5 transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-dark-background text-dark-text'
              : 'bg-light-background text-light-text'
          }`}
        >
          <div
            className="w-16"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {currentLanguage === 'en' ? (
              <button
                onClick={() => changeLanguage('pl')}
                className={`flex px-2 py-1 text-l w-16 text-center rounded-full items-center transition-colors ${
                  theme === 'dark'
                    ? 'hover:bg-dark-hover'
                    : 'hover:bg-light-hover'
                }`}
                role="menuitem"
              >
                <img
                  src={PolandFlag}
                  alt="Poland Flag"
                  className="w-5 h-5 mr-2 my-auto rounded-full border-[1px] border-zinc-400 inline"
                />
                PL
              </button>
            ) : (
              <button
                onClick={() => changeLanguage('en')}
                className={`flex align-middle px-2 py-1 w-full text-l text-center rounded-full transition-colors ${
                  theme === 'dark'
                    ? 'hover:bg-dark-hover'
                    : 'hover:bg-light-hover'
                }`}
                role="menuitem"
              >
                <img
                  src={EnFlag}
                  alt="En/US Flag"
                  className="w-5 h-5 mr-2 my-auto rounded-full border-[1px] border-zinc-400 inline"
                />
                EN
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSelect

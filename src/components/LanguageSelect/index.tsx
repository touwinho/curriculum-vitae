import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

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

  return (
    <div className="relative ml-3">
      {i18n.language === 'pl' ? (
        <button
          onClick={() => changeLanguage('en')}
          className={clsx(
            'flex items-center p-1 text-l w-16 text-center rounded-full',
            {
              'bg-dark-hover': theme === 'dark',
              'bg-light-hover': theme !== 'dark',
            },
          )}
          role="menuitem"
        >
          <img
            src={PlFlag}
            alt="Poland Flag"
            className={`w-6 h-6 mr-2 my-auto rounded-full border-[1px] inline ${theme === 'dark' ? 'border-dark-button' : 'border-light-button'}`}
          />
          PL
        </button>
      ) : (
        <button
          onClick={() => changeLanguage('pl')}
          className={clsx(
            'flex items-center p-1 text-l w-16 text-center rounded-full',
            {
              'bg-dark-hover': theme === 'dark',
              'bg-light-hover': theme !== 'dark',
            },
          )}
          role="menuitem"
        >
          <img
            src={EnFlag}
            alt="En/US Flag"
            className="w-6 h-6 mr-2 my-auto rounded-full border-[1px] border-zinc-400 inline"
          />
          EN
        </button>
      )}
    </div>
  )
}

export default LanguageSelect

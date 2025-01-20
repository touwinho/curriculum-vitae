import { FC } from 'react'
import { useTheme } from '@/context/ThemeContext'

import darkIcon from '@/assets/images/themes/dark-icon.svg'
import lightIcon from '@/assets/images/themes/light-icon.svg'

const ThemeSwitch: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <label className="relative inline-flex items-center cursor-pointer ml-2 select-none">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        className="sr-only"
      />
      <span
        className={`flex h-8 w-[60px] items-center rounded-full p-1 ${
          theme === 'dark' ? 'bg-dark-section' : 'bg-light-section'
        }`}
      >
        <span
          className={`h-6 w-6 rounded-full ease-in-out duration-300 flex items-center justify-center transform ${
            theme === 'dark' ? 'translate-x-[28px]' : 'translate-x-0'
          }`}
        >
          <div
            className={`${theme === 'dark' ? 'bg-dark-background' : 'bg-light-background'} p-1 rounded-full`}
          >
            <img
              src={theme === 'dark' ? darkIcon : lightIcon}
              alt={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              className="w-4 h-4"
              style={{
                filter: theme === 'dark' ? 'invert(100%)' : 'none',
                transition: 'none',
              }}
            />
          </div>
        </span>
      </span>
    </label>
  )
}

export default ThemeSwitch

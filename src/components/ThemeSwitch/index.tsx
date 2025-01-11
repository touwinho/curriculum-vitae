import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import lightIcon from '@/assets/themes/light-icon.svg'
import darkIcon from '@/assets/themes/dark-icon.svg'

export const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <label className="relative inline-flex cursor-pointer items-center ml-6">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        className="sr-only"
      />
      <span
        className={`flex h-8 w-[60px] items-center rounded-full p-1 duration-500 ${
          theme === 'dark' ? 'bg-[#36414e]' : 'bg-[#CCCCCE]'
        }`}
      >
        <span
          className={`h-6 w-6 rounded-full duration-500 flex items-center justify-center ${
            theme === 'dark'
              ? 'translate-x-[28px] bg-dark-background'
              : 'bg-white'
          }`}
        >
          <img
            src={theme === 'dark' ? darkIcon : lightIcon}
            alt={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
            className="w-4 h-4"
            style={{
              filter: theme === 'dark' ? 'invert(100%)' : 'none',
            }}
          />
        </span>
      </span>
    </label>
  )
}

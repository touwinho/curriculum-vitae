import { FC } from 'react'
import { useTheme } from '@/context/ThemeContext'
import clsx from 'clsx'
import darkIcon from '@/assets/images/themes/dark-icon.svg'
import lightIcon from '@/assets/images/themes/light-icon.svg'

const ThemeSwitch: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <label
      className={clsx(
        'relative inline-flex items-center cursor-pointer ml-2 select-none',
        'md:ml-4',
      )}
    >
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        className="sr-only"
      />
      <span
        className={clsx(
          'flex h-9 w-[66px] items-center p-1.5 rounded-full',
          theme === 'dark' ? 'bg-dark-section' : 'bg-light-section',
        )}
      >
        <span
          className={clsx(
            'h-7 w-7 rounded-full ease-in-out duration-300 flex items-center justify-center transform',
            theme === 'dark' ? 'translate-x-[27px]' : 'translate-x-0',
          )}
        >
          <div
            className={clsx(
              'p-1 rounded-full',
              theme === 'dark' ? 'bg-dark-background' : 'bg-light-background',
            )}
          >
            <img
              src={theme === 'dark' ? darkIcon : lightIcon}
              alt={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              className={clsx('w-5 h-5 ', theme === 'dark' ? 'invert' : 'none')}
            />
          </div>
        </span>
      </span>
    </label>
  )
}

export default ThemeSwitch

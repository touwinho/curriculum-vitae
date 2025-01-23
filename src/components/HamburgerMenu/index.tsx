import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { useTheme } from '@/context/ThemeContext'
import NavButton from '@/components/NavButton'

interface Props {
  isOpen: boolean
  closeMenu: () => void
}

const HamburgerMenu: FC<Props> = ({ isOpen, closeMenu }) => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <div
      className={clsx(
        'fixed top-0 right-0 w-full h-full shadow-lg z-40 transform transition-transform duration-300',
        isOpen ? 'translate-x-0' : 'translate-x-full',
        theme === 'dark' ? 'bg-dark-section' : 'bg-light-section',
      )}
    >
      <nav className="flex flex-col items-center justify-center h-full text-4xl gap-16">
        <NavButton title={t('home.nav')} path="/" onClick={closeMenu} />
        <NavButton title={t('about.nav')} path="/about" onClick={closeMenu} />
        <NavButton
          title={t('contact.nav')}
          path="/contact"
          onClick={closeMenu}
        />
      </nav>
    </div>
  )
}

export default HamburgerMenu

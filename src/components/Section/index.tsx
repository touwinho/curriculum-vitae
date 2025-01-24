import { FC, ReactNode } from 'react'
import clsx from 'clsx'
import { useTheme } from '@/context/ThemeContext'

interface Props {
  children: ReactNode
  className?: string
}

const Section: FC<Props> = ({ children, className }) => {
  const { theme } = useTheme()

  return (
    <section
      className={clsx(
        'p-4 w-full rounded-3xl',
        'md:p-8',
        theme === 'dark' ? 'bg-dark-section' : 'bg-light-section',
        className,
      )}
    >
      {children}
    </section>
  )
}

export default Section

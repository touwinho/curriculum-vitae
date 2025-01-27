import { FC, ReactNode } from 'react'
import clsx from 'clsx'
import { useTheme } from '@/context/ThemeContext'

interface Props {
  children: ReactNode
  title?: string
  className?: string
}

const Section: FC<Props> = ({ children, title, className }) => {
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
      {title && (
        <h1 className={clsx('text-3xl text-center mb-2', 'md:mb-6')}>
          {title}
        </h1>
      )}
      {children}
    </section>
  )
}

export default Section

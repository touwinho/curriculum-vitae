import { FC, ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children: ReactNode
  className?: string
}

const Button: FC<Props> = ({ children, className }) => {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-md font-semibold transition-colors duration-300 bg-button text-white hover:bg-opacity-60',

        className,
      )}
    >
      {children}
    </button>
  )
}

export default Button

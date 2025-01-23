import { FC } from 'react'
import clsx from 'clsx'

interface Props {
  onClick: () => void
  isOpen: boolean
}

const HamburgerButton: FC<Props> = ({ onClick, isOpen }) => {
  return (
    <button
      className={clsx('relative ml-2 z-50', 'md:hidden')}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <svg
        className={clsx(
          'w-10 h-10 transition-transform duration-300',
          isOpen && 'transform rotate-60',
        )}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={clsx(
            'transition-opacity duration-300',
            isOpen ? 'opacity-0' : 'opacity-100',
          )}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
        <path
          className={clsx(
            'transition-opacity duration-300',
            isOpen ? 'opacity-100' : 'opacity-0',
          )}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  )
}
export default HamburgerButton

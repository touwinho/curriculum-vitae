import React from 'react'
import { Link } from 'react-router-dom'
import useTheme from '@/hooks/useTheme'

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header>
      <nav className="flex justify-between items-center">
        <div>
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/about">About</Link>
        </div>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
      </nav>
    </header>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

export const Home: React.FC = () => {
  return (
    <div>
      Home page
      <Link to="/about">
        <button>Go to About</button>
      </Link>
    </div>
  )
}

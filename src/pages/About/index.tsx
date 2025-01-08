import React from 'react'
import { Link } from 'react-router-dom'

export const About: React.FC = () => {
  return (
    <div>
      About page
      <Link to="/">
        <button>Go to home</button>
      </Link>
    </div>
  )
}

import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  path: string
  onClick?: () => void
}

const NavButton: FC<Props> = ({ path, title, onClick }) => {
  return (
    <Link to={path} className="ml-6">
      <button onClick={onClick}>{title}</button>
    </Link>
  )
}

export default NavButton

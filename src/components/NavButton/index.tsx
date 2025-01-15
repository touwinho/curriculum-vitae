import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  path: string
}

const NavButton: FC<Props> = ({ path, title }) => {
  return (
    <Link to={path} className="ml-6 text-xl">
      {title}
    </Link>
  )
}

export default NavButton

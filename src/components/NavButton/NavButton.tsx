import { Link } from 'react-router-dom'

interface NavButtonProps {
  title: string
  path: string
}

export const NavButton: React.FC<NavButtonProps> = ({ path, title }) => {
  return (
    <Link to={path} className="ml-6">
      {title}
    </Link>
  )
}

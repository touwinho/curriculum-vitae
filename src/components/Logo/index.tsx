import { FC } from 'react'
import { Link } from 'react-router-dom'

const Logo: FC = () => {
  return (
    <Link to="/" className="text-4xl select-none">
      {'<ŁT />'}
    </Link>
  )
}

export default Logo

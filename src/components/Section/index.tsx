import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const Section: FC<Props> = ({ children, className }) => {
  return <div className={`my-12 p-8 w-full ${className}`}>{children}</div>
}

export default Section

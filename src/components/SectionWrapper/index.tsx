import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const SectionWrapper: FC<Props> = ({ children }) => {
  return <div className="my-12 mx-24">{children}</div>
}

export default SectionWrapper

import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const PageWrapper: FC<Props> = ({ children }) => {
  return <div className="max-w-5xl mt-6 mx-auto">{children}</div>
}

export default PageWrapper

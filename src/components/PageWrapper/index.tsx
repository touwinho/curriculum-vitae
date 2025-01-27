import clsx from 'clsx'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const PageWrapper: FC<Props> = ({ children }) => {
  return (
    <div className={clsx('max-w-5xl mt-3 mx-auto', 'md:mt-6')}>{children}</div>
  )
}

export default PageWrapper

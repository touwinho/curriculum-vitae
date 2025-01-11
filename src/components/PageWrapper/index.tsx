import { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <div className="max-w-5xl mt-6 mx-auto">{children}</div>
}

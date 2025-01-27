import { FC, ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children: ReactNode
}

const SectionWrapper: FC<Props> = ({ children }) => {
  return (
    <main
      className={clsx(
        'flex flex-col gap-6 mx-4 mt-5',
        'md:mx-24 md:mt-28 md:gap-12',
      )}
    >
      {children}
    </main>
  )
}

export default SectionWrapper

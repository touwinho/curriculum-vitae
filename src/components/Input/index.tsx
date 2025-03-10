import clsx from 'clsx'
import { FC } from 'react'

interface Props {
  label: string
  name: string
  className?: string
}

const Input: FC<Props> = ({ label, className, name }) => {
  return (
    <label className="flex flex-col">
      {label}
      <input
        className={clsx('text-black', className)}
        type="text"
        name={name}
      />
    </label>
  )
}

export default Input

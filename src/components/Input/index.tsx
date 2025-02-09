import clsx from 'clsx'
import { FC } from 'react'

interface Props {
  label: string
  className?: string
}

const Input: FC<Props> = ({ label, className }) => {
  return (
    <label className="flex flex-col">
      {label}
      <input className={clsx('', className)} type="text" />
    </label>
  )
}

export default Input

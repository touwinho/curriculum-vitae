import { FC, useEffect, useState } from 'react'
import clsx from 'clsx'
import { useTheme } from '@/context/ThemeContext'

interface Props {
  title: string
  targetCount: number
  duration: number
  formatCount?: (count: number) => string
}

const Counter: FC<Props> = ({
  title,
  targetCount,
  duration,
  formatCount = (count) => count.toString(),
}) => {
  const [count, setCount] = useState(0)
  const { theme } = useTheme()
  const intervalTime = duration / targetCount

  useEffect(() => {
    if (count < targetCount) {
      const interval = setInterval(() => {
        setCount((prev) => {
          const newCount = prev + 1
          if (newCount >= targetCount) {
            clearInterval(interval)
            return targetCount
          }
          return newCount
        })
      }, intervalTime)
      return () => clearInterval(interval)
    }
  }, [count, targetCount, intervalTime])

  return (
    <div
      className={clsx(
        'flex flex-col text-center justify-around p-4 rounded-3xl',
        'md:w-1/3',
        theme === 'dark' ? 'bg-dark-counter' : 'bg-light-counter',
      )}
    >
      <h1 className="text-2xl">{title}</h1>
      <p className="text-5xl">{formatCount(count)}</p>
    </div>
  )
}

export default Counter

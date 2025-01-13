import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Home: FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.welcome')}</p>
    </div>
  )
}

export default Home

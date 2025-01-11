import React from 'react'
import { useTranslation } from 'react-i18next'

export const NotFound: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('notfound.title')}</h1>
      <p>{t('notfound.description')}</p>
    </div>
  )
}

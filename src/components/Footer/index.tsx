import React from 'react'
import { useTranslation } from 'react-i18next'

export const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <footer className="text-center py-4 text-sm">
      © {new Date().getFullYear()} {t('footer.text')} | Łukasz Tołwiński
    </footer>
  )
}

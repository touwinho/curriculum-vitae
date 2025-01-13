import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Footer: FC = () => {
  const { t } = useTranslation()

  return (
    <footer className="text-center py-4 text-sm">
      © {new Date().getFullYear()} {t('footer.text')} | Łukasz Tołwiński
    </footer>
  )
}

export default Footer

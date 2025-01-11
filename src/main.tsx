import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { ThemeProvider } from './context/ThemeContext'
import './i18n'
import i18n from './i18n'

const Root = () => {
  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Root />)

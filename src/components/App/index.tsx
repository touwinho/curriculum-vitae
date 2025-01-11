import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Header } from '@/components/Header'
import { PageWrapper } from '../PageWrapper'
import { Contact } from '@/pages/Contact'
import { NotFound } from '@/pages/NotFound'
import './styles.css'
import { Footer } from '../Footer'

export const App: React.FC = () => {
  return (
    <Router>
      <PageWrapper>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </PageWrapper>
    </Router>
  )
}

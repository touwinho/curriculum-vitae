import { FC } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PageWrapper from '@/components/PageWrapper'
import '@/styles.css'

const App: FC = () => {
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

export default App

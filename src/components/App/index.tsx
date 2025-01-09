import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import Header from '@/components/Header'
import './styles.css'

export const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

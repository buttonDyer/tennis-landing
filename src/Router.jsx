import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AboutPage from './pages/AboutPage/AboutPage'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import SingleNews from './pages/SingleNews'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:newsId" element={<SingleNews />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

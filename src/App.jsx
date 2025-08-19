import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import ExportPage from './pages/export/Export'
import Products from './pages/products/Products'
import Contact from './pages/contact/Contact'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import TermsAndConditions from './pages/legal/TermsAndConditions'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ 
        minHeight: '100vh',
        backgroundColor: 'var(--bg-gray)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/export" element={<ExportPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

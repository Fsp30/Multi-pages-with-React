import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen md:h-screen md:overflow-hidden">
        <Navbar />
        <main className="flex-grow">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

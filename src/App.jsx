import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Photography from './pages/Photography'
import Films from './pages/Films'
import JustUs from './pages/JustUs'
import BlackAndWhite from './pages/BlackAndWhite'
import Contact from './pages/Contact'
import CoupleStories from './pages/CoupleStories'
import CoupleStoryDetail from './pages/CoupleStoryDetail'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/photography" element={<Photography />} />
            <Route path="/portfolio/films" element={<Films />} />
            <Route path="/portfolio/just-us" element={<JustUs />} />
            <Route path="/portfolio/black-and-white" element={<BlackAndWhite />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/couple-stories" element={<CoupleStories />} />
            <Route path="/couple-stories/:slug" element={<CoupleStoryDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App


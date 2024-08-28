import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Ceremony from './pages/Ceremony'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import ClothingIdeas from "./pages/ClothingIdeas"
import Footer from "./components/Footer"
import './App.scss'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Ceremony" element={<Ceremony />}></Route>
        <Route path="Gallery" element={<Gallery />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
        <Route path="/clothingIdeas" element={<ClothingIdeas/>}></Route>
      </Routes>
      <div className="footerNav">
        <Footer />
      </div>
    </>
  )
}

export default App

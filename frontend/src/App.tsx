import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Navbar  from './components/Navbar'
import Menu from "./components/Menu";
import  About  from './pages/About'
import  Contact  from './pages/Contact'
import  Home  from './pages/Home'
import Footer from './components/Footer'
import Login from './components/Login'
// import { Home } from '@mui/icons-material'




const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 

  return (
    <>
      <Router>
      <div className="flex">
        <Menu isOpen={isMenuOpen} />
        <div className="flex-1">
          <Navbar onMenuToggle={toggleMenu} />
          <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        
        </Routes>
        </div>
      </div>
      <Footer />
        
      </Router>
    </>
  )
}

export default App


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Navbar  from './components/Navbar'
import  About  from './pages/About'
import  Contact  from './pages/Contact'
import  Home  from './pages/Home'
import Footer from './components/Footer'
import Login from './components/Login'
// import { Home } from '@mui/icons-material'




const App: React.FC = () => {
 

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

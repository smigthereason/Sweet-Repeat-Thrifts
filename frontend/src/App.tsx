// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Menu from "./components/Menu";
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Home from './pages/Home'
// import Footer from './components/Footer'
// import Login from './components/Login'

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar onMenuToggle={toggleMenu} />
//       <div className="flex flex-1">
//         <div
//           className={`fixed left-0 top-16 sm:top-20 md:top-24 z-40 transition-all duration-300 ${
//             isMenuOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}
//         >
//           <Menu isOpen={isMenuOpen} />
//         </div>
//         <main className="flex-1 transition-all duration-300 ml-0">
//           {children}
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/login' element={<Login />} />
//         </Routes>
//       </Layout>
//     </Router>
//   )
// }

// export default App
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Menu from "./components/Menu";
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './components/Login'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onMenuToggle={toggleMenu} />
      <div className="flex flex-1">
        <div
          className={`fixed left-0 top-16 sm:top-20 md:top-24 z-40 transition-all duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Menu isOpen={isMenuOpen} />
        </div>
        <main className={`flex-1 transition-all duration-300 ${isMenuOpen ? 'ml-72' : 'ml-0'}`}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;

// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Menu from './Menu';

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar onMenuToggle={toggleSidebar} />
//       <div className="flex flex-1">
//         <Menu isOpen={isSidebarOpen} />
//         <main className="flex-1">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default Layout;
import React, { useState } from 'react';
import Navbar from './Navbar';
import Menu from './Menu';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onMenuToggle={toggleSidebar} />
      <div className="flex flex-1">
        <Menu isOpen={isSidebarOpen} />
        <main className={`flex-1 transition-transform duration-300 ${isSidebarOpen ? 'scale-down' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

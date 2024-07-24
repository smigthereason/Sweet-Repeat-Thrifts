// import React from "react";
// // import { MdOutlineDashboard } from "react-icons/md";
// // import { RiSettings4Line } from "react-icons/ri";
// // import { AiOutlineUser } from "react-icons/ai";
// // import { FiSearch, FiShoppingCart } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { IconType } from "react-icons";

// interface MenuProps {
//   isOpen: boolean;
// }

// interface MenuItem {
//   name: string;
//   link: string;
//   margin?: boolean;
// }

// const Menu: React.FC<MenuProps> = ({ isOpen }) => {
//   const menus: MenuItem[] = [
//     { name: "Home", link: "/", },
//     { name: "Sale", link: "/sale", },
//     { name: "Sets", link: "/sets", },
    
//     { name: "Tops", link: "/tops", },
//     { name: "Skirts", link: "/skirts",  },
//     { name: "New Arrivals", link: "/new arrivals", },
//     { name: "Body Suits", link: "/body suits", },
//     { name: "Cargo Pants", link: "/cargo pants",},
   
//   ];

//   if (!isOpen) return null;

//   return (
//     <section className="flex left-0 top-16 sm:top-20 md:top-24 z-40">
//       <div className="bg-gray-100 bg-blur h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] w-72 duration-500 text-black px-4 overflow-y-auto">
//         <div className="mt-4 flex flex-col gap-4 relative">
//           {menus.map((menu, i) => (
//             <Link
//               to={menu.link}
//               key={i}
//               className={`${
//                 menu.margin && "mt-5"
//               } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-customBrown rounded-md`}
//             >
//               {/* <div>{React.createElement(menu.icon, { size: "20" })}</div> */}
//               <h2>{menu.name}</h2>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Menu;

import React from 'react';
import { Link } from 'react-router-dom';

interface MenuProps {
  isOpen: boolean;
}

interface MenuItem {
  name: string;
  link: string;
  margin?: boolean;
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  const menus: MenuItem[] = [
    { name: "Home", link: "/" },
    { name: "New ", link: "/new" },
    { name: "Sale", link: "/sale" },
    { name: "Sets", link: "/sets" },
    { name: "Tops", link: "/tops" },
    { name: "Skirts", link: "/skirts" },
    { name: "Body Suits", link: "/body suits" },
    { name: "Cargo Pants", link: "/cargo pants" },
  
  ];

  return (
    <section
      className={`fixed left-0 top-0 sm:top-0 md:top-0 z-40 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="bg-gray-100 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] w-72 text-black px-4 overflow-y-auto">
        <div className="mt-4 flex flex-col gap-4">
          {menus.map((menu, i) => (
            <Link
              to={menu.link}
              key={i}
              className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-customBrown rounded-md ${
                menu.margin ? 'mt-5' : ''
              }`}
            >
              <h2>{menu.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

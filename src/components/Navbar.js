
import logo from '../assets/logo.jpg'

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='sticky top-0 z-50 bg-white'>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/">
              <img src={logo} className="h-12 w-auto cursor-pointer" alt="Success Tronics" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#services"
                className="text-gray-600 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#aboutus"
                className="text-gray-600 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </a>
              <a
                href="#contactus"
                className="text-gray-600 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="mobile-menu-button"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#services"
              className="text-gray-600 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#aboutus"
              className="text-gray-600 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </a>
            <a
              href="#contactus"
              className="text-gray-600 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


// const Navbar = () => {
//   return (
//     <nav className='sticky top-0 z-50 bg-white'>
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <a href="/">
//             <img  src={logo} className="h-12 w-auto cursor-pointer" alt="Success Tronics" />
//             </a>
         
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <a
//                 href="#services"
//                 className="text-gray-600 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Services
//               </a>
//               <a
//                 href="#aboutus"
//                 className="text-gray-600 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 About Us
//               </a>
//               <a
//                 href="#contactus"
//                 className="text-gray-600 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className="md:hidden">
        
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


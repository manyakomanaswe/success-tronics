
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-white'>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/">
            <img  src={logo} className="h-12 w-auto cursor-pointer" alt="Success Tronics" />
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
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        
      </div>
    </nav>
  );
};

export default Navbar;


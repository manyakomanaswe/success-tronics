

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const registrationNumber = '2021/542858/07';
  return (
    
    <footer className="flex justify-center items-center py-4  bg-blue-700 h-20 p-8">

    
    <div className="max-w-5xl mx-auto px-4 text-xs sm:px-6 lg:px-8 text-white md:text-sm">
        <span>&copy; {currentYear} Success Tronics</span>
        <span className="mx-2">|</span>
        <span>CIPC No: {registrationNumber}</span>
      </div>
   

    
    </footer>
  )
}

export default Footer
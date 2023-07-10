

const Jumbotron = () => {
  return (
    <div className="relative h-80">
    <div
      className="absolute inset-0 bg-blue-600 bg-opacity-95"
    
     style={{ backgroundImage: `url(${require('../assets/banner1.jpg')})` }}
    />
    <div className="flex flex-col items-start justify-center h-full">
      <div className="max-w-5xl mx-auto relative z-10">
      <h1 className="text-white text-4xl pl-4 md:text-6xl lg:text-7xl">Success Tronics</h1>
      <p className="text-gray-200 italic pl-4 text-sm md:text-lg">Keeping your IT infrastructure switched on</p>
      </div>
    </div>
  </div>
    // <div className="container h-300 w-full bg-cover bg-center relative"
    // style={{ backgroundImage: `url('./assets/banner_s.jpg')` }}>
    // <div className="overlay">

  //   <div className="container h-300 relative">
  //     <div className="absolute inset-0 bg-blue-600 bg-opacity-70"
  //   style={{ zIndex: -1 }}>
  //     </div>
  //     <img
  //   className="object-cover object-center h-full w-full"
  //   src="./assets/banner_s.jpg"
  //   alt="Background"
  // />
  //   <div className="max-w-5xl mx-auto">

  //     <h1 className="text-white text-4xl pl-4 md:text-5xl lg:text-6xl">Success Tronics</h1>
  //     <p className="text-gray-200 italic pl-4 text-sm md:text-lg">Keeping your IT infrastructure switched on</p>
  //   </div>
  //  </div>
  
  )
}

export default Jumbotron
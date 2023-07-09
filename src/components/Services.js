import Card from "./Card"

import services from "../data/services";

const Services = () => {
  return (
    <div className="bg-slate-100">

    <div className=" w-[100%] mx-auto px-4 sm:px-6 max-w-5xl lg:px-8">
    <h2 id="services" className="text-xl font-medium text-center text-gray-700 uppercase pt-4 pb-4 md:font-semibold  md:text-3xl">services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">

      {services.map(service =>(
        <Card
        key={service.heading}
        image={service.ServiceImage}
        icon={service.Icon}
        heading={service.heading}
        tag={service.tag}
        />
      ))}

    </div>
    </div>

    
    </div>
    
  )
}

export default Services


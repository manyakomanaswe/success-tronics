

const Card = ({image,icon,heading,tag}) => {
  return (
    <div className="w-[260px] h-[420px] rounded-t bg-gray-50 mt-6 mb-6 pb-4">
      <img
        className="w-full h-[200px] rounded-t"
        src={image}
        alt={heading}
      />
      <div className="flex justify-center items-center mt-2 w-20 h-20 mx-auto bg-blue-100 rounded-full">
        
        <img src={icon} alt={heading.substr(0,4)} className="w-6 h-6"/>
        
      </div>
      <h6 className="text-xl text-gray-800 text-center mt-4">{heading}</h6>
      <p className="text-gray-600 text-sm text-center mt-2 p-6">
        {tag}
      </p>
    </div>
  );
};

export default Card;

const CustomCard = ({ imageSrc, label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer h-24 w-full bg-white rounded-lg shadow-md p-2 flex flex-col items-center transition-transform hover:scale-105 active:scale-95"
    >
      <img src={imageSrc} alt={label} className="h-8 w-8 mb-2" />
      <p className="text-lg md:text-sm font-light text-center">{label}</p>
    </div>
  );
};

export default CustomCard;

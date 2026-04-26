function Card ({ item, onClick }) {
  const { name, image } = item.show;
  const imageUrl = image ? image.medium : "https://via.placeholder.com/210x295?text=No+Image";

  return (
    <div className="flex flex-col text-left">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-56 object-cover rounded" 
      />
      <div className="py-2">
        <h3 className="text-sm font-semibold text-black truncate">{name}</h3>
      </div>
      <button 
        onClick={() => onClick(item.show)}
        className="bg-gray-100 text-xs py-1"
      >
        Details
      </button>
    </div>
  );
};

export default Card;
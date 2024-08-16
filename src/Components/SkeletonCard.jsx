const SkeletonCard = () => {
  return (
    <div className="bg-white w-full min-h-[428px] rounded-xl shadow-md p-4 flex flex-col gap-4 animate-pulse">
      <div className="bg-gray-300 h-[250px] rounded-lg mb-4"></div>
      <div className="flex flex-col gap-2">
        <div className="bg-gray-300 h-6 w-3/4 rounded-md"></div>
        <div className="bg-gray-300 h-4 w-5/6 rounded-md"></div>
        <div className="bg-gray-300 h-4 w-5/6 rounded-md"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;

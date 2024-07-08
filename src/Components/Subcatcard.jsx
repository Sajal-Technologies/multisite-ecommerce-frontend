const Subcatcard = ({ img, productName, price }) => {
  return (
    <>
      <div className="subcatcard md:flex-shrink-0 mobile:flex-shrink-0 xl:w-[286px] md:w-[49%] mobile:w-full mobile:px-4 mobile:h-[108px] text-[#262626] h-[105px] bg-white flex justify-between p-4 rounded-xl border-[1px] border-[#DEDEDE]">
        <div className="">
          <p className="text-[19px] font-medium">{productName}</p>
          <p className=" text-[#7A7A7A] mobile:leading-none py-1 leading-none">
            From <br />
            <span className="text-[#3D3D3D] text-xl">&#8377;{price}</span>
          </p>
        </div>
        <div className="scale-[1.45] overflow-hidden px-4">
          <img
            className="h-full w-full object-cover scale-x-[-1]"
            src={img}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Subcatcard;

import BannerImg from "../images/MainPage/CatBanner/BannerImg.png";

const Catbanner = () => {
  return (
    <>
      <figure className="w-full catbanner tablet:w-full mobile:w-full relative bg-gradient-to-br from-[#015F85] via-[#05739e] to-[#19a5dc] rounded-lg overflow-hidden">
        <h1 className="text-white font-semibold text-2xl p-6 mobile:text-sm mobile:text-nowrap mobile:py-4 mobile:px-4">
          Smart Phones
        </h1>
        <div className="imgcon">
          <img
            className=" scale-125 absolute left-[20%] top-[33%] md:top-[50%]  mobile:top-[60%]  mobile:left-0 mobile:scale-[1.8]"
            src={BannerImg}
            alt=""
          />
        </div>
      </figure>
    </>
  );
};

export default Catbanner;

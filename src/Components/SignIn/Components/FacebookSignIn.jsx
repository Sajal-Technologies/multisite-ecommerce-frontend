import facebook from "../../../images/SigninPage/facebook.png";

function FacebookSignIn() {
  return (
    <button className=" bg-white border justify-center border-[#EDEDED] tablet:text-2xl w-full xl:w-1/2 py-3 tablet:py-4 px-4 rounded-[10px] flex items-center gap-2 text-[#3D3D3D] font-semibold xl:text-lg">
      <img className="w-5 tablet:w-7 xl:w-6" src={facebook} alt="Facebook" />
      Continue with Facebook
    </button>
  );
}

export default FacebookSignIn;

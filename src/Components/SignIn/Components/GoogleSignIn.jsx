import { FcGoogle } from "react-icons/fc";

function GoogleSignIn() {
  return (
    <button className="bg-white border justify-center border-[#EDEDED] tablet:text-2xl w-full xl:w-1/2 py-3 tablet:py-4 px-4 rounded-[10px] flex items-center gap-2 text-[#3D3D3D] font-semibold xl:text-lg">
      <FcGoogle className="text-xl xl:text-2xl tablet:text-3xl" />
      Continue with Google
    </button>
  );
}

export default GoogleSignIn;

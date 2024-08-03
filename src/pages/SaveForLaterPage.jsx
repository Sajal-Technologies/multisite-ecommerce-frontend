import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import Breadcrump from "../Components/Cat-components/Breadcrump";
import { useEffect } from "react";
import { useSaveForLater } from "../Contexts/SaveForLaterContext";

function SaveForLaterPage() {
  const { getSavedItems, savedItems, isSavedLoading, savedError } =
    useSaveForLater();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    getSavedItems();
  }, [user]);

  if (!user) {
    return (
      <div className="pt-[15rem]  mobile:pt-[7rem] flex justify-center flex-col items-center">
        <h1>Missing Cart items?</h1>
        <p>Login to see the items you added previously</p>
        <Link to={"/SignIn"}>SignIn</Link>
      </div>
    );
  }

  return (
    <div className="pt-[60px] mobile:pt-[70px]">
      <Breadcrump />
      {isSavedLoading && <div>Loading...</div>}
      {savedError && <div>{savedError}</div>}
      {!isSavedLoading && !savedError && (
        <div className="w-[85%] mobile:w-full mx-auto mt-8 px-4">
          <div className="flex gap-4 items-center mb-10 mobile:gap-2 mobile:mb-4">
            <h1 className="text-[#121212] font-semibold text-2xl mobile:text-lg tablet:text-xl">
              Save For Later
            </h1>
            <span className="border border-[#005F85] tablet:text-xs text-sm text-[#005F85] px-2 py-1 mobile:px-1 mobile:py-[2px] rounded-full font-semibold mobile:text-xs ">
              {savedItems.length} items
            </span>
          </div>
          {!isSavedLoading && savedItems.length <= 0 && (
            <div className="text-center my-[10rem]">
              You don&apos;t have Items in your Cart. Please add items
            </div>
          )}
          {savedItems.length !== 0 && (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] justify-items-center mobile:grid-cols-1 mobile:justify-items-stretch gap-4 mobile:gap-4 mobile:w-full">
              {/* {savedItems.map(
                (item, i) =>
                  
                  
              )} */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SaveForLaterPage;

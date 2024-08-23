import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import Breadcrump from "../Components/Cat-components/Breadcrump";
import { useEffect } from "react";
import { useSaveForLater } from "../Contexts/SaveForLaterContext";
import SaveForLaterItem from "../Components/SaveForLaterItem";
import Loader from "../Components/Loader";

function SaveForLaterPage() {
  const { getSavedItems, savedItems, isSaveLoading, savedError } =
    useSaveForLater();
  const { user } = useAuth();
  console.log(isSaveLoading);

  useEffect(() => {
    if (!user?.token?.access) return;
    getSavedItems();
  }, [user?.token?.access, getSavedItems]);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-[100vh] bg-gray-100">
        <div className="text-center p-6 w-[85%] bg-white shadow-md rounded-lg">
          <h1 className="text-[#121212] text-xl font-bold">
            Missing Cart items?
          </h1>
          <p className="mb-4">Sign-in to see the items you added previously</p>
          <Link
            to={"/SignIn"}
            className="bg-[#005F85] text-white px-2 py-1 text-lg font-semibold rounded-md"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[100px] ">
      <Breadcrump />
      {isSaveLoading && <Loader type="lg" />}
      {savedError && <div>{savedError}</div>}
      {!isSaveLoading && !savedError && (
        <div className="w-[85%] mobile:w-full mx-auto mt-8 px-4">
          <div className="flex gap-4 items-center mb-10  mobile:gap-2 mobile:mb-4">
            <h1 className="text-[#121212] font-semibold text-2xl mobile:text-lg tablet:text-xl">
              Save For Later
            </h1>
            <span className="border border-[#005F85] tablet:text-xs text-sm text-[#005F85] px-2 py-1 mobile:px-1 mobile:py-[2px] rounded-full font-semibold mobile:text-xs ">
              {savedItems.length} items
            </span>
          </div>
          {!isSaveLoading && savedItems.length <= 0 && (
            <div className="flex items-center justify-center h-[60vh] bg-gray-100">
              <div className="text-center p-6 bg-white shadow-md rounded-lg">
                <svg
                  className="mx-auto mb-4 h-12 w-12 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l1 9h13l1-9h2M4 10h16M3 10h16M5 21a2 2 0 01-2-2h14a2 2 0 01-2 2M17 15a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                  />
                </svg>
                <h2 className="text-xl font-semibold text-gray-700">
                  Save for Later is Empty
                </h2>
                <p className="text-gray-500 mt-2">
                  You don’t have any items saved for later. Browse our
                  collection and save your favorite items!
                </p>
              </div>
            </div>
          )}
          {savedItems.length !== 0 && (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] justify-items-center mb-8  mobile:grid-cols-1 mobile:justify-items-stretch gap-4 mobile:gap-4 mobile:w-full">
              {savedItems.map((item, i) => (
                <SaveForLaterItem key={i} item={item} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SaveForLaterPage;

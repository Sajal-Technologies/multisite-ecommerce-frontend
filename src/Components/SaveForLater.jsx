import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useSaveForLater } from "../Contexts/SaveForLaterContext";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function SaveForLater({ id, sellerLink }) {
  const { addToSaveForLater, deleteSavedItem, savedItems } = useSaveForLater();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setIsSaved(
      savedItems?.some(
        (item) => item.product_id === id || item.seller_link === sellerLink
      )
    );
  }, [savedItems, id, sellerLink]);

  async function handleSaveForLater() {
    if (!user) {
      navigate("/SignIn");
      return;
    }
    try {
      const data = id ? { product_id: id } : { seller_link: sellerLink };
      setIsLoading(true);
      !isSaved
        ? await addToSaveForLater(data, setIsSaved)
        : await deleteSavedItem(data, setIsSaved);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      className={`w-10 h-10 flex items-center justify-center relative group ${
        isLoading
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer opacity-100"
      }`}
      onClick={handleSaveForLater}
      disabled={isLoading}
    >
      {isLoading && <Loader type="sm" />}
      {!isLoading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isSaved ? "#005F85" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={isSaved ? "none" : "#005F85"}
          className={`w-6 h-6 `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
          />
        </svg>
      )}
    </button>
  );
}

export default SaveForLater;

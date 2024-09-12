import { FiSearch } from "react-icons/fi";
import { useSearch } from "../../Contexts/SearchContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productFetch from "../../Axios Instance/productAxios";
import { IoClose, IoSearchOutline } from "react-icons/io5";
function SearchBar({ isVisible }) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { setQuery, clearFilters } = useSearch();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [userRecentSearch, setUserRecentSearch] = useState([]);

  const searchQuery = new URLSearchParams(window.location.search).get("q");

  const navigate = useNavigate();

  useEffect(() => {
    const recentSearches =
      JSON.parse(localStorage.getItem("recentSearch")) || [];
    setUserRecentSearch(recentSearches);
  }, []);

  useEffect(() => {
    setSearch(searchQuery || "");
  }, [searchQuery]);

  useEffect(() => {
    setIsInputFocused(false);
  }, [isVisible]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getSuggestion() {
      const res = await productFetch.post(
        "/suggestion-keyword-api/",
        {
          product_name: search,
        },
        {
          signal,
        }
      );
      setSuggestions(res.data.Suggestion_Keywords);
    }

    getSuggestion();

    return () => controller.abort();
  }, [search]);

  const handleSearchSubmit = (e) => {
    if (e.code === "Enter") {
      e.preventDefault();

      if (search.trim() === "") return;

      setIsInputFocused(false);
      setQuery(search);
      clearFilters();
      navigate(`/Search?q=${search.trim()}`);

      localStorage.setItem(
        "recentSearch",
        JSON.stringify([...new Set([...userRecentSearch, search.trim()])])
      );
      setUserRecentSearch((prev) => [...prev, search]);
    }
  };

  const handleSubmitOnClick = () => {
    if (search.trim() === "") return;

    setQuery(search);
    clearFilters();
    navigate(`/Search?q=${search.trim()}`);
    setIsInputFocused(false);

    localStorage.setItem(
      "recentSearch",
      JSON.stringify([...new Set([...userRecentSearch, search.trim()])])
    );
    setUserRecentSearch((prev) => [...prev, search]);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsInputFocused(false);
      setSuggestions([]);
    }, 200);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion);
    setQuery(search);
    clearFilters();
    navigate(`/Search?q=${suggestion.trim()}`);
    setIsInputFocused(false);
  };

  const handleRemoveRecentSearch = (ClickedItem) => {
    const NewRecentSearch = userRecentSearch.filter(
      (item) => item !== ClickedItem
    );

    localStorage.setItem(
      "recentSearch",
      JSON.stringify([...new Set([...NewRecentSearch])])
    );
    setUserRecentSearch(NewRecentSearch);
  };

  const handleClearRecentSearch = () => {
    localStorage.removeItem("recentSearch");
    setUserRecentSearch([]);
  };

  return (
    <div
      className={`search flex border-[1px]  border-[#DEDEDE] items-center relative w-[60%] ${
        isInputFocused ? " rounded-t-lg" : "rounded-lg"
      }`}
    >
      <input
        className={`bg-[#FAFAFA]  px-4 py-2 pr-10 w-full focus:outline-none ${
          isInputFocused ? " rounded-t-lg" : "rounded-lg"
        }  mobile:pr-10  mobile:placeholder:text-xs`}
        type="text"
        placeholder="Search essentials, groceries and more..."
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          handleSearchSubmit(e);
        }}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        aria-label="Search Products"
        onFocus={() => setIsInputFocused(true)}
        onBlur={handleBlur}
      />
      <button className="right-3 absolute" onClick={handleSubmitOnClick}>
        <FiSearch className=" text-[#5C5C5C] text-xl" />
      </button>
      {isInputFocused ? (
        userRecentSearch.length > 0 ? (
          <div className="bg-[#FAFAFA] p-2 border-[1px] rounded-b-lg overflow-hidden  border-[#DEDEDE] max-h-[18rem] w-full absolute top-full left-0 shadow-lg">
            {suggestions.length > 0 && (
              <h3 className="text-gray-400 text-sm font-semibold">
                Popular Searches
              </h3>
            )}
            <ul className="mt-2 ">
              {suggestions?.map((suggestion, index) => (
                <li
                  className="text-sm hover:bg-[#F3F9FB] p-2 border-t-[1px] border-gray-100 rounded flex items-center gap-2 cursor-pointer"
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <IoSearchOutline className="text-lg" />
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
            <ul>
              <div className="flex justify-between items-center">
                <h3 className="text-gray-400 text-sm font-semibold">
                  Recent Search
                </h3>
                <button
                  className="text-sm font-bold text-[#005F85]"
                  onClick={handleClearRecentSearch}
                >
                  Clear all
                </button>
              </div>
              {userRecentSearch.map((recentSearch, index) => (
                <li
                  className="text-sm hover:bg-[#F3F9FB] p-2 border-t-[1px] border-gray-100 rounded flex gap-2  cursor-pointer"
                  key={index}
                >
                  <div
                    className="flex gap-2 items-center w-full"
                    onClick={() => handleSuggestionClick(recentSearch)}
                  >
                    <IoSearchOutline className="text-lg" />
                    <span>{recentSearch}</span>
                  </div>
                  <button
                    className="text-lg ml-auto"
                    onClick={() => handleRemoveRecentSearch(recentSearch)}
                  >
                    <IoClose />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : suggestions.length > 0 ? (
          <div className="bg-[#FAFAFA] p-2 border-[1px] rounded-b-lg overflow-hidden  border-[#DEDEDE] max-h-64 w-full absolute top-full left-0 shadow-lg">
            <h3 className="text-gray-400 text-sm font-semibold">
              Popular Searches
            </h3>
            <ul className="mt-2">
              {suggestions?.map((suggestion, index) => (
                <li
                  className="text-sm hover:bg-[#F3F9FB] p-2 border-t-[1px] border-gray-100 rounded flex items-center gap-2 cursor-pointer"
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <IoSearchOutline className="text-lg" />
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null
      ) : null}
    </div>
  );
}

export default SearchBar;

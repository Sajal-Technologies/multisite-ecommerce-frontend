import { useSearchParams } from "react-router-dom";

function useURL() {
  const [urlQuery, setURLQuery] = useSearchParams();

  function decodeOrDefault(param) {
    const value = urlQuery.get(param);
    return value ? decodeURIComponent(value) : "";
  }

  const product_name = decodeOrDefault("q");
  const sort_by = decodeOrDefault("sortby") || "relevance";
  const ppr_min = parseInt(decodeOrDefault("ppr_min"), 10) || 0;
  const ppr_max = parseInt(decodeOrDefault("ppr_max"), 10) || 120000;
  const page_number = parseInt(decodeOrDefault("page"), 10) || 1;
  const filters_all = urlQuery.get("filters") || "";

  return [
    {
      product_name,
      sort_by,
      page_number,
      ppr_min,
      ppr_max,
      filters_all,
    },
    setURLQuery,
  ];
}

export default useURL;

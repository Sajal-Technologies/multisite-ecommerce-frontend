import { useSearchParams } from "react-router-dom";

function useURL() {
  const [urlQuery] = useSearchParams();
  const product_name = urlQuery.get("q");
  const sort_by = urlQuery.get("sortby") || "relevance";
  const ppr_min = parseInt(urlQuery.get("ppr_min")) || 0;
  const ppr_max = parseInt(urlQuery.get("ppr_max")) || 12000;
  const page_number = parseInt(urlQuery.get("page")) || 1;

  return {
    product_name,
    sort_by,
    page_number,
    ppr_min,
    ppr_max,
  };
}

export default useURL;

import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function useURL() {
  const [urlQuery, setURLQuery] = useSearchParams();
  const { product } = useParams();

  function decodeOrDefault(param) {
    const value = urlQuery.get(param);
    return value ? decodeURIComponent(value) : "";
  }

  const query = decodeOrDefault("q");
  const sort_by = decodeOrDefault("sortby") || "relevance";
  const ppr_min = parseInt(decodeOrDefault("ppr_min"), 10) || 0;
  const ppr_max = parseInt(decodeOrDefault("ppr_max"), 10) || 120000;
  const page_number = parseInt(decodeOrDefault("page"), 10) || 1;
  const filters = urlQuery.get("filters");

  const queries = useMemo(() => {
    return {
      product_name: product || query,
      sort_by,
      ppr_min,
      ppr_max,
      page_number,
      filter_all: filters && filters.split("$").join(","),
    };
  }, [sort_by, ppr_min, ppr_max, page_number, filters, product, query]);

  return [queries, setURLQuery];
}

export default useURL;

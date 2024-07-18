import Breadcrump from "../Cat-components/Breadcrump";
import Sort from "../Cat-components/Sort";
import Filteration from "../Cat-components/Filteration";

import ListView from "../ProductView/ListView";
import GridView from "../ProductView/GridView";
import { useProduct } from "../../Contexts/ProductContext";

function SearchResult() {
  const { view } = useProduct();

  return (
    <div className="flex flex-col w-full bg-[#FAFAFA] pt-[200px] mobile:pt-[70px]">
      <Breadcrump />
      <Sort />
      <div className="flex w-full items-center justify-center">
        <div className="flex xl:w-[85%] md:w-full mt-4 md:mt-0 xl:gap-0 md:gap-4 mobile:w-full px-4 xl:px-0 xl:justify-between py-4">
          <Filteration />
          {view === "grid" && <GridView />}
          {view === "list" && <ListView />}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;

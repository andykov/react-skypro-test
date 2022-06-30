import { useState, useMemo } from "react";

const FUNCS_SORT = {
  sortPriceAsc: (a, b) => a.price - b.price,
  sortPriceDesc: (a, b) => b.price - a.price,
};

export const useSort = (
  data = [],
  typeDefault = Object.keys(FUNCS_SORT)[0]
) => {
  const [sortType, setSortType] = useState(typeDefault);
  const sortedData = useMemo(() => {
    const sortFunc = FUNCS_SORT[sortType];
    const copyData = JSON.parse(JSON.stringify(data));

    return sortFunc ? copyData.sort(sortFunc) : data;
  }, [sortType, data]);

  return {
    sortType,
    setSortType,
    sortedData,
  };
};

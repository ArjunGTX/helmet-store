import { createContext, useReducer, useContext } from "react";
import { filterReducer, initialFilters } from "../reducers";

const FilterContext = createContext(null);

export const useFilters = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [filters, filterDispatch] = useReducer(filterReducer, initialFilters);

  return (
    <FilterContext.Provider value={{ filters, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

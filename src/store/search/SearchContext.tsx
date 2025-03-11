// SearchContext.tsx
import { createContext } from "react";
import { SearchContextType } from "~/types/search";

const SearchContext = createContext<SearchContextType>(["", () => { }]);

export default SearchContext;
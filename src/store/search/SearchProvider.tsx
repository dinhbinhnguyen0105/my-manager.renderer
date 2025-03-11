// SearchProvider.tsx
import { useMemo, useState } from "react";
import SearchContext from "./SearchContext";
import { SearchContextType } from "~/types/search";

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [search, setSearch] = useState<string>("");
    const searchContextValue = useMemo<SearchContextType>(() => [search, setSearch], [search, setSearch]);

    return (
        <SearchContext.Provider value={searchContextValue}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;
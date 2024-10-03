import { SearchNaVProviderType } from "@/types/SearchResults";
import { createContext, useContext, useState } from "react"

const searchNavDefaults = {
  searchTerm: "",
  page: 1,
  limit: 10
}
const SearchNavContext = createContext<SearchNaVProviderType>({
  setSearchNavData: function (): void {
    throw new Error("Function not implemented.");
  },
  searchNavData: searchNavDefaults
})
const useSearchNav = () => useContext(SearchNavContext);

function SearchNavProvider({ children }: { children: JSX.Element }) {
  const [searchNavData, setSearchNavData] = useState(searchNavDefaults)

  return (
    <SearchNavContext.Provider value={{ searchNavData, setSearchNavData }}>
      {children}
    </SearchNavContext.Provider>
  )
}

export { SearchNavProvider, useSearchNav }
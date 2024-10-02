import { useEffect, useState } from "react"
import {
  useNavigate,
  useParams
} from "react-router-dom";
import searchFetchApi from "@/services/searchFetchApi.ts"
import { SearchFetchReturn } from "@/types/SearchService"
import Pagination from "@/components/Pagination"
import { searchNavDataType, useSearchNav } from "@/contexts/SearchNavContext"
import SearchBar from "@/components/SearchBar";
import navigateSearch from "@/services/navigateSearch";
import SearchResults from "@/components/SearchResults";


export default function Search() {
  const { searchTerm, page, limit } = useParams<string>()
  const { searchNavData, setSearchNavData } = useSearchNav()


  const [searchResults, setSearchResults] = useState<SearchFetchReturn>({
    numFound: 0,
    start: 0,
    page: page ? Number(page) : 1,
    limit: limit ? Number(limit) : 10
  })

  async function fetchSearch() {
    const apiParam = {
      searchTerm: searchTerm ? searchTerm : searchNavData.searchTerm,
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 10
    }

    await searchFetchApi(apiParam).then(data => {
      setSearchResults(data)
      setSearchNavData({
        ...searchNavData,
        searchTerm
      })
    })
  }

  const navigate = useNavigate();
  function navigateSearchHook(navProps: searchNavDataType) {
    navigate(navigateSearch(navProps))
  }

  useEffect(() => {
    console.log("urlchange")
    fetchSearch()
  }, [searchTerm, page, limit])

  return (
    <>
      <header className="bg-gray-100 shadow mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
        <SearchBar callback={navigateSearchHook} /> 
      </header>
      {searchResults.docs &&
        <>
        <div className="bg-gray-50 shadow mx-auto max-w-7xl  p-6 flex justify-between">
            <div><p>Results:{searchResults.numFound}</p></div>
            <div className="inline-block justify-end relative w-64">
              <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>10 results per page</option>
                <option>20 results per page</option>
                <option>50 results per page</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        <main className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
          

          <SearchResults results={searchResults} />
          <div>
            <Pagination page={searchResults.page} limit={searchResults.limit} start={searchResults.start} total={searchResults.numFound} />
          </div>
        </main>
        </>
      }

    </>
  )
}
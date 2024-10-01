import { useEffect, useState } from "react"
import {
  useParams
} from "react-router-dom";
import searchFetchApi from "@/services/searchFetchApi.ts"
import { SearchFetchReturn } from "@/types/SearchService"
import Pagination from "@/components/Pagination"


export default function Search() {
  const { searchTerm, page, limit } = useParams<string>();
  const [searchResults, setSearchResults] = useState<SearchFetchReturn>({
    numFound: 0,
    start: 0,
    page: page ? Number(page) : 1,
    limit: limit ? Number(limit) : 10
  })


  console.log(searchTerm)

  async function fetchSearch() {
    await searchFetchApi({ searchTerm }).then(data => {
      setSearchResults(data)
    })
  }

  useEffect(() => {
    fetchSearch()
  }, [])

  return (
    <>
      <h1>Search</h1>
      <h2>Results {searchResults.numFound}</h2>
      {searchResults.docs?.map((item) => {
        return (
          <>
            <div key={item.key}>
              <p><b>Title</b>: {item.title}</p>
              <p><b>Author</b>: {item.author_name}</p>
            </div>
          </>
        )
      })}
      <div>
        <Pagination page={searchResults.page} limit={searchResults.limit} start={searchResults.start} total={searchResults.numFound} />
      </div>
    </>
  )
}
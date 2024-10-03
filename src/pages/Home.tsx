import navigateSearch from "@/services/navigateSearch";
import SearchBar from "@/components/SearchBar"
import { Link, useNavigate } from "react-router-dom";
import { searchNavDataType } from "@/types/SearchResults"


export default function Home() {
  const navigate = useNavigate();
  function navigateSearchHook(navProps: searchNavDataType) {
    navigate(navigateSearch(navProps))
  }
  return (
    <div className="mx-auto max-w-7xl">
      <header className="bg-blue-900 h-96 shadow flex items-center p-6 justify-center">
        
          <Link to="/" >
            <h1 className="text-white">Book Challenge 6000</h1>
          </Link>
       
      </header>
      
      <div className="bg-gray-100 shadow md:flex items-center p-6 md:justify-center">
        <p className="mr-20">Search for your book... </p>
        
        <SearchBar callback={navigateSearchHook} />
      </div>
    </div>

  )
}
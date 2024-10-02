import navigateSearch from "@/services/navigateSearch";
import SearchBar from "@/components/SearchBar"
import { useNavigate } from "react-router-dom";
import { searchNavDataType } from "@/contexts/SearchNavContext"


export default function Home(){
  const navigate = useNavigate();
  function navigateSearchHook(navProps: searchNavDataType){
    navigate(navigateSearch(navProps))
  }
  return (
    <SearchBar callback={navigateSearchHook}/>
  )
}
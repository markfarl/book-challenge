import { useNavigate } from "react-router-dom";
import SearchBar from "@/components/SearchBar"

export default function Home(){
  const navigate = useNavigate();

  function navigateSearch(searchTerm: string){
    navigate(`/search/${searchTerm}`);
  }
  return (
    <SearchBar callback={navigateSearch}/>
  )
}
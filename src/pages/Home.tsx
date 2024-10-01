import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home(){
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate();

  function navigateSearch(){
    navigate(`/search?searchTerm=${searchTerm}`);
  }
  return (
    <>
    <p>Search:</p>
    <input id="searchTerm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
    <button onClick={navigateSearch}>Go</button>
    </>
  )
}
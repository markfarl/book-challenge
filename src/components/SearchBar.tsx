import { useState } from "react"

type CallbackType = {
  callback: (arg0: string) => void
}

export default function SearchBar({ callback }: CallbackType){
  const [searchTerm, setSearchTerm] = useState("")
  return(
    <>
    <p>Search:</p>
    <input id="searchTerm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
    <button onClick={()=>{
      callback(searchTerm)
    }}>Go</button>
    </>
  )
}
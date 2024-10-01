import { useEffect, useState } from "react"
import {
  useParams
} from "react-router-dom";

export default function Search() {
  const [searchResults, setSearchResults] = useState<any>([])
  
  const { search } = useParams();

  async function fetchSearch() {
    await fetch(`https://openlibrary.org/search.json?q=${search}&page=1&limit=10`).then((res) => {
      return res.json();
    })
      .then((data) => {
        console.log(data);
        setSearchResults(data.docs);
        console.log(searchResults)

      });
  }

  useEffect(() => {
    fetchSearch()
  }, [searchResults])

  return (
    <>
      <h1>Search</h1>
      <h2>Results</h2>
      {searchResults.map((item: any) => {
        return (
          <div key={item.key}>
            <p>Author Name{item.author_name}</p>
            <p>Author Name{item.author_name}</p>
          </div>
        )
      })}

    </>
  )
}
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { bookFetchApi } from "@/services/searchFetchApi"
import bookblank from "@/assets/book-blank.jpg"
import { BookType } from "@/types/BookTypes"
import Loading from "@/components/Loading"
import navigateSearch from "@/services/navigateSearch"
import { useSearchNav } from "@/contexts/SearchNavContext";


export default function Book() {
  const [isLoading, setIsLoading] = useState(true)
  const { searchNavData } = useSearchNav()
  const [bookDetails, setBookDetails] = useState<BookType>()
  let { isbn = "" } = useParams();
  const navigate = useNavigate();


  function navigateSearchHook() {
    if(searchNavData.searchTerm){
      navigate(navigateSearch(searchNavData))
    } else {
      navigate("/")
    }
  }

  async function fetchBook() {
    setIsLoading(true)
    await bookFetchApi({ isbn }).then(data => {
      setBookDetails(data)
    })
    setIsLoading(false)
  }

  useEffect(() => {
    fetchBook()
  }, [])

  return (
    <div className="mx-auto max-w-7xl">
      <header className="bg-gray-100 shadow flex items-center p-6 justify-between">
        <div className="md:w-1/2">
          <Link to="/" >
            <h1>Book Challenge 6000</h1>
          </Link>
        </div>
      </header>
      {!isLoading &&
        <>
          <div className="bg-gray-50 shadow">
            <div className="grid md:grid-cols-3 p-6 gap-4">

              <img
                alt="Book Blank"
                src={bookblank}
                className="h-auto w-auto top-1"
              />
              <div className='md:col-span-2'>
                <h1>{bookDetails?.full_title || bookDetails?.title}</h1>
                <h2>{bookDetails?.subtitle}</h2>
                <p>Description:</p>
                <p> {bookDetails?.description?.value}</p>
              </div>

            </div>
            <div className="items-center flex p-6 justify-end">
              <a onClick={navigateSearchHook}>Back to search results {">>>"}</a>
            </div>
          </div>
        </>
      }
      {isLoading &&
        <div className="bg-gray-50 shadow p-10 flex justify-center">
          <Loading />
        </div>
      }
    </div>
  )
}
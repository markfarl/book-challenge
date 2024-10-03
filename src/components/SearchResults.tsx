import { SearchFetchReturn } from "@/types/SearchService"
import { Link } from "react-router-dom"

export default function SearchResults({ results }: { results: SearchFetchReturn }) {
  return (
    <ul role="list" className="divide-y divide-gray-300">
      {results.docs?.map((item) => {
        return (
          <li key={item.key} className="flex justify-between gap-x-6 py-5">

            <div className="flex min-w-0 gap-x-4">
              <Link to={`/book/${item.edition_key?.[0]}`} >
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{item.title_sort.replace(/[^a-zA-Z0-9 ]/g, "")}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.author_name?.[0]}</p>
                </div>
              </Link>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900"><b>Year: </b>{item.first_publish_year}</p>
            </div>

          </li>
        )
      })}
    </ul>
  )
}

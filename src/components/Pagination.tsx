import { useSearchNav } from "@/contexts/SearchNavContext"
import { useNavigate } from "react-router-dom";
import navigateSearch from "@/services/navigateSearch"
import { useEffect, useState } from "react";

type PaginationType = {
  page: number,
  limit: number,
  total: number,
  start: number,
}
type PaginationValueType = PaginationType & {
  pages: number,
  resultEnd: number,
  pageNavArray: number[],
}
function getPagVals(props: PaginationType): PaginationValueType {
  const pages = Math.ceil(props.total / props.limit)
  const resultEnd = props.start + props.limit
  const pageNavArray = [];
  for (let x = props.page; x < props.page + 3; x++) {
    if (props.page == 1) {
      pageNavArray.push(x)
    } else if (props.page == pages) {
      pageNavArray.push(x - 2)
    } else {
      pageNavArray.push(x - 1)
    }
  }
  // prepend with pages 0 for blank
  if (pageNavArray[0] > 1) {
    (pageNavArray[0] > 2) ? pageNavArray.unshift(1, 0) : pageNavArray.unshift(1)
  }

  // append 
  const finalPage = pageNavArray[pageNavArray.length - 1]
  if (finalPage < pages) {
    (finalPage < pages - 1) ? pageNavArray.push(0, pages) : pageNavArray.push(pages)
  }


  return {
    ...props,
    pages,
    resultEnd,
    pageNavArray,
    start: props.start + 1
  }
}

export default function Pagination(props: PaginationType) {
  const navigate = useNavigate()
  const { searchNavData, setSearchNavData } = useSearchNav()
  const [pagProps, setPagProps] = useState(getPagVals(props))

  function changeToPage(page: number) {
    const newNavData = {
      ...searchNavData,
      page
    }
    setSearchNavData(newNavData)
    console.log(newNavData)
    navigate(navigateSearch(newNavData))
  }

  useEffect(() => {
    setPagProps(getPagVals(props))
  }, [searchNavData, props])

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{pagProps.start}</span> to <span className="font-medium">{pagProps.resultEnd}</span> of{' '}
            <span className="font-medium">{pagProps.total}</span> results
          </p>
        </div>

        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            {pagProps.pageNavArray.map((item, idx) => {
              if (item == 0) {
                return (
                  <span key={item + 'H' + idx} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                    ...
                  </span>
                )
              }
              return (
                <a
                  key={item + 'P' + idx}
                  onClick={() => {
                    changeToPage(item)
                  }}
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  {(item == pagProps.page)
                    ? <strong>{item}</strong>
                    : <>{item}</>
                  }

                </a>
              )
            })}
          </nav>

        </div>
      </div>
    </div>
  )
}

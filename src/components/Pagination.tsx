import { useEffect } from "react"

type PaginationType = {
  page: number,
  limit: number,
  total: number,
  start: number,
}
type PaginationValueType = PaginationType & {
  pages: number,
  resultEnd: number
}
function getPagVals(props: PaginationType): PaginationValueType {
  const pages = Math.floor(props.total / props.limit)
  const resultEnd = props.start + props.limit

  return {
    ...props,
    pages,
    resultEnd,
    start: props.start + 1
  }
}

export default function Pagination(props: PaginationType) {
  const { page, limit, total, pages, start, resultEnd } = getPagVals(props)

  return (
    <>
      <p>Showing {start} of {resultEnd} results</p>
      <p>Page {page} of {pages}</p>
    </>
  )
}
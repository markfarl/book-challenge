import { SetStateAction } from "react"

export interface searchNavDataType {
  searchTerm: string,
  page: number,
  limit: number,
}

export type SearchNaVProviderType = {
  searchNavData: searchNavDataType,
  setSearchNavData: React.Dispatch<SetStateAction<searchNavDataType>>
}

export type CallbackSearchType = {
  callback: (arg0: searchNavDataType) => void
}

export type PaginationType = {
  page: number,
  limit: number,
  total: number,
  start: number,
}

export type PaginationValueType = PaginationType & {
  pages: number,
  resultEnd: number,
  pageNavArray: number[],
}
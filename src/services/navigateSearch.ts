import { searchNavDataType } from "@/contexts/SearchNavContext"


export default function navigateSearch(searchProps: searchNavDataType){
  return`/search/${searchProps.searchTerm}/${searchProps.page}/${searchProps.limit}`
}
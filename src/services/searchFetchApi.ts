import { baseUrl } from "../constants/api"
import { SearchFetch, SearchFetchReturn } from "@/types/SearchService"

export default async function searchFetchApi({ searchTerm, page = 1, limit = 10 }: SearchFetch): Promise<SearchFetchReturn> {
  return await fetch(`${baseUrl}?q=${searchTerm}&page=${page}&limit=${limit}`).then((res) => {
    return res.json();
  })
    .then((data) => {
      return {
        ...data,
        page,
        limit,
      }
    });
}
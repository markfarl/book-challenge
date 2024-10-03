import { baseUrl } from "../constants/api"
import { BookFetch, SearchFetch, SearchFetchReturn } from "@/types/SearchService"
import { BookType } from "@/types/BookTypes"


export async function searchFetchApi({ searchTerm, page = 1, limit = 10 }: SearchFetch): Promise<SearchFetchReturn> {
  return await fetch(`${baseUrl}search.json?q=${searchTerm}&page=${page}&limit=${limit}`).then((res) => {
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

export async function bookFetchApi({ isbn }: BookFetch): Promise<BookType> {

  return await fetch(`${baseUrl}books/${isbn}.json`).then((res) => {
    return res.json();
  }).then(data => data);
}

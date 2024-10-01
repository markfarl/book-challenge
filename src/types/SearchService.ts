export type SearchFetch = {
  searchTerm: string | undefined,
  page?: number,
  limit?: number
}
export interface SearchFetchReturn {
  numFound: number;
  start: number;
  numFoundExact?: boolean;
  docs?: (DocsEntity)[] | null;
  num_found?: number;
  q?: string;
  offset?: null;
  page: number;
  limit: number;
}
export interface DocsEntity {
  author_alternative_name?: (string)[] | null;
  author_key?: (string)[] | null;
  author_name?: (string)[] | null;
  contributor?: (string)[] | null;
  cover_edition_key?: string | null;
  cover_i?: number | null;
  ddc?: (string)[] | null;
  ebook_access: string;
  ebook_count_i: number;
  edition_count: number;
  edition_key?: (string)[] | null;
  first_publish_year: number;
  first_sentence?: (string)[] | null;
  format?: (string)[] | null;
  has_fulltext: boolean;
  ia?: (string)[] | null;
  ia_collection?: (string)[] | null;
  ia_collection_s?: string | null;
  isbn?: (string)[] | null;
  key: string;
  language?: (string)[] | null;
  last_modified_i: number;
  lcc?: (string)[] | null;
  lccn?: (string)[] | null;
  lending_edition_s?: string | null;
  lending_identifier_s?: string | null;
  number_of_pages_median?: number | null;
  oclc?: (string)[] | null;
  osp_count?: number | null;
  printdisabled_s?: string | null;
  public_scan_b: boolean;
  publish_date?: (string)[] | null;
  publish_place?: (string)[] | null;
  publish_year?: (number)[] | null;
  publisher?: (string)[] | null;
  seed?: (string)[] | null;
  title: string;
  title_sort: string;
  title_suggest: string;
  type: string;
  id_amazon?: (string)[] | null;
  id_better_world_books?: (string)[] | null;
  id_librarything?: (string)[] | null;
  id_goodreads?: (string)[] | null;
  subject?: (string)[] | null;
  ia_loaded_id?: (string)[] | null;
  ia_box_id?: (string)[] | null;
  ratings_average?: number | null;
  ratings_sortable?: number | null;
  ratings_count?: number | null;
  ratings_count_1?: number | null;
  ratings_count_2?: number | null;
  ratings_count_3?: number | null;
  ratings_count_4?: number | null;
  ratings_count_5?: number | null;
  readinglog_count?: number | null;
  want_to_read_count?: number | null;
  currently_reading_count?: number | null;
  already_read_count?: number | null;
  publisher_facet?: (string)[] | null;
  subject_facet?: (string)[] | null;
  _version_: number;
  lcc_sort?: string | null;
  author_facet?: (string)[] | null;
  subject_key?: (string)[] | null;
  ddc_sort?: string | null;
  subtitle?: string | null;
  id_overdrive?: (string)[] | null;
  place?: (string)[] | null;
  place_key?: (string)[] | null;
  place_facet?: (string)[] | null;
  person?: (string)[] | null;
  person_key?: (string)[] | null;
  person_facet?: (string)[] | null;
}
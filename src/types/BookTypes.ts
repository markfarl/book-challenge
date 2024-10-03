export interface BookType {
  type: AuthorsEntityOrLanguagesEntityOrWorksEntityOrType;
  authors?: (AuthorsEntityOrLanguagesEntityOrWorksEntityOrType)[] | null;
  isbn_13?: (string)[] | null;
  languages?: (AuthorsEntityOrLanguagesEntityOrWorksEntityOrType)[] | null;
  publish_date: string;
  publishers?: (string)[] | null;
  source_records?: (string)[] | null;
  subjects?: (string)[] | null;
  title: string;
  subtitle: string;
  full_title: string;
  description: string;
  works?: (AuthorsEntityOrLanguagesEntityOrWorksEntityOrType)[] | null;
  key: string;
  latest_revision: number;
  revision: number;
  created: CreatedOrLastModified;
  last_modified: CreatedOrLastModified;
}
export interface AuthorsEntityOrLanguagesEntityOrWorksEntityOrType {
  key: string;
}
export interface CreatedOrLastModified {
  type: string;
  value: string;
}

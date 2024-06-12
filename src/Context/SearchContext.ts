import { createContext } from "react";

export interface SearchInfo {
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}
export const SearchContext = createContext<SearchInfo>({} as SearchInfo);

import { Movie } from "../Types/Types";

export const API_BASE_URL = "http://www.omdbapi.com/?apikey=ab5aa083";

export const API_ENDPOINTS = {
  DISCOVER: `${API_BASE_URL}/discover`,
  MOVIES: `${API_BASE_URL}/genre/movie/list`,
  GENRE: `${API_BASE_URL}/movie`,
  IMAGES: `${API_BASE_URL}`,
  LOGO: `${API_BASE_URL}`,
} as const;

export const SORT_OPTIONS = {
  TITLE: "&t",
  YEAR: "&y",
  TYPE: "&type",
  PAGE: "&page",
} as const;

export const API_SORT_OPTIONS = [
  { value: "popularity.desc", label: "Most Popular" },
  { value: "popularity.asc", label: "Least Popular" },
  { value: "vote_average.desc", label: "Most Rated" },
  { value: "vote_average.asc", label: "Least Rated" },
  { value: "vote_count.desc", label: "Most Voted" },
  { value: "vote_count.asc", label: "Least Voted" },
] as const;

export const DEFAULT_SORT_OPTION = API_SORT_OPTIONS[0].value;

// class ApiService {
//   async getFilmInfo(id: string) {
//     const response = await fetch(`${API_BASE_URL}$i=${id}`);

//     return await response.json();
//   }

//   async getFilms(params: Movie) {
//     const queryString = new URLSearchParams(params.toString());

//     const response = await fetch(`${API_BASE_URL}?${queryString}`);

//     return await response.json();
//   }
// }

// export const apiService = new ApiService();

// export const API_OPTIONS = [
//   { value: "popularity.desc", label: "Most Popular" },
//   { value: "popularity.asc", label: "Least Popular" },
//   { value: "vote_average.desc", label: "Most Rated" },
//   { value: "vote_average.asc", label: "Least Rated" },
//   { value: "vote_count.desc", label: "Most Voted" },
//   { value: "vote_count.asc", label: "Least Voted" },
// ] as const;

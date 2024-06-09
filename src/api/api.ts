export const API_BASE_URL = "http://www.omdbapi.com/?apikey=ab5aa083";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const API_LANGUAGE = "en";

const IMAGE_QUALITY = "w342";
const LOGO_QUALITY = "w185";

export const API_ENDPOINTS = {
  SEARCH: `${API_BASE_URL}&s=`,
  IMDB: `${API_BASE_URL}&i=`,
  PAGE: `${API_BASE_URL}/movie`,
  IMAGES: `${IMAGE_BASE_URL}/${IMAGE_QUALITY}`,
  LOGOS: `${IMAGE_BASE_URL}/${LOGO_QUALITY}`,
} as const;

// export const API_OPTIONS = [
//   { value: "popularity.desc", label: "Most Popular" },
//   { value: "popularity.asc", label: "Least Popular" },
//   { value: "vote_average.desc", label: "Most Rated" },
//   { value: "vote_average.asc", label: "Least Rated" },
//   { value: "vote_count.desc", label: "Most Voted" },
//   { value: "vote_count.asc", label: "Least Voted" },
// ] as const;

export const API_SORT_OPTIONS = {
  TITLE: "&t",
  YEAR: "&y",
  TYPE: "&type",
  PAGE: "&page",
} as const;

// class ApiService {
//   async getFilmInfo(id: string) {
//     const response = await fetch(`${API_BASE_URL}$i=${id}`);
//     return await response.json();
//   }

//   async getFilms(params: {
//     Title: string;
//     Poster: string;
//     Genre: string;
//     Plot: string;
//     Year: string;
//     Released: string;
//     BoxOffice: string;
//     Country: string;
//     Production: string; // Changed from Production to production
//     Actors: string;
//     Director: string;
//     Writer: string;
//   }) {
//     const {
//       Title,
//       Poster,
//       Genre,
//       Plot,
//       Year,
//       Released,
//       BoxOffice,
//       Country,
//       Production, // Changed from Production to production
//       Actors,
//       Director,
//       Writer,
//     } = params;

//     let queryString = "";

//     if (Title) {
//       queryString += `Title = ${Title}&`;
//     }

//     if (Poster) {
//       queryString += `Poster = ${Poster}&`;
//     }

//     if (Genre) {
//       queryString += `Genre = ${Genre}&`;
//     }

//     if (Plot) {
//       queryString += `Plot = ${Plot}&`;
//     }

//     if (Year) {
//       queryString += `Year = ${Year}&`;
//     }

//     if (Released) {
//       queryString += `Released = ${Released}&`;
//     }

//     if (BoxOffice) {
//       queryString += `BoxOffice = ${BoxOffice}&`;
//     }

//     if (Country) {
//       queryString += `Country = ${Country}&`;
//     }

//     if (Production) {
//       queryString += `Production = ${Production}&`;
//     }

//     if (Actors) {
//       queryString += `Actors = ${Actors}&`;
//     }

//     if (Director) {
//       queryString += `Director = ${Director}&`;
//     }

//     if (Writer) {
//       queryString += `Writer = ${Writer}&`;
//     }

//     const response = await fetch(`${API_BASE_URL}?${queryString}`);
//     return await response.json();
//   }
// }

// export const apiService = new ApiService();

// class apiService {
//   getFilmInfo(id) {
//     fetch(`url/${id}`);
//   }

//   getFilms(params) {
//     const { genre, movie, tag } = params;

//     // ...

//     const queryString = new URLSearchParams(params);

//     fetch(`url/findIFlms/${queryString}`);
//   }

//   get() {
//     fetch();
//   }

//   post() {
//     fetch("", {
//       method: "POST",
//     });
//   }
// }

// class apiController {
//   getFilms(params: { serachString: "sgd"; type: "movie" | "dsgsdg" }) {
//     url = "sdgdsgsg/films" + queryString;
//     apiService.get(url);
//   }
// }

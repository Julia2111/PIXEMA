export interface IActiveContext {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ITheme {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
export interface IChildren {
  children: React.ReactNode[] | React.ReactNode;
}
export interface IAuthContext {
  isAuth: string;
  signin: (auth: string, callBack: () => void) => void;
  signout: (callBack: () => void) => void;
}
export interface TodoItemTypes {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface FetchPost {
  title: string;
  type: string;
  year: number;
}

export interface ICard {
  id: string;
  Title: string;
  Poster: string;
  Genre: string;
}
export interface MoviesStorage {
  movies: Movie[];
  moviesDetails: object[];
  page: number;
  total: number;
}
export interface User {
  username: string;
  email: string;
  password: string;
  course_group: number;
}
export interface ActivateUser {
  uid: string;
  token: string;
}

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Actors: string;
  Released: string;
  BoxOffice: string;
  Country: string;
  Production: string;
  Director: string;
  Writer: string;
  Genre: string;
  imdbRating: string;
  Runtime: string;
  Plot: string;
}
export interface Genre {
  value: string;
  label: string;
}
export interface ISearchMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface ModalUrl {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
}

export interface Genres {
  genres: Array<Genre>;
}

export interface GenreResponse {
  id: number;
  name: string;
}

export interface GenresResponse {
  genres: Array<GenreResponse>;
}

//Сортировкаааа
export enum SortPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
  TITLE_DESC = "title",
  TITLE_ASC = "-title",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
}
export interface SliderProps {
  children: React.ReactNode;
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  autoplaySpeed?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  adaptiveHeight?: boolean;
  nextArrow?: React.ReactNode;
  prevArrow?: React.ReactNode;
  appendDots?: (dots: React.ReactNode) => React.ReactNode;
  beforeChange?: (oldIndex: number, newIndex: number) => void;
  customPaging?: (slideIndex: number) => React.ReactNode;
}

export interface MoviesResponse {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}

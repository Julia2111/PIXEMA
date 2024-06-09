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
export interface ICard {
  id: number;
  Title: string;
  Poster: string;
  Genre: string;
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
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Type: string;
  Genre: string;
  imdbRating: string;
}

export interface MovieDetails {
  imdbRating: string;
  Genre: string;
}
export interface MoviesStorage {
  movies: Movie[];
  moviesDetails: MovieDetails[];
  page: number;
  total: number;
}
//Сортировка
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

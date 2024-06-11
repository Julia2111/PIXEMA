export const APP_ROUTES = {
  HOME: "/",
  MOVIES: "/posts",
  RATED: "/rated",
} as const;
export const API_BASE_URL = "/api";
export const API_ROUTES = {
  MOVIES: "/posts",
  GENRE: "/genres",
  IMAGES: "/images",
  LOGO: "/genre",
} as const;

export const MAX_RATING = 10;

export const MIN_RATING = 0;

export const RATED_MOVIES_PER_PAGE = 4;

export const APP_ROUTES = {
  HOME: "/",
  MOVIES: "/movies",
  RATED: "/rated",
} as const;

export const API_SORT_OPTIONS = {
  TITLE: "&t",
  YEAR: "&y",
  TYPE: "$type",
  LOGOS: "/logos",
} as const;

export const MAX_RATING = 10;

export const MIN_RATING = 0;

export const RATED_MOVIES_PER_PAGE = 4;

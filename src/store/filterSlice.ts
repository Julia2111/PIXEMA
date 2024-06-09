import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { API_SORT_OPTIONS, DEFAULT_SORT_OPTION } from "../api/api";
import { MAX_RATING } from "../api/app";

export interface FiltersState {
  selectedGenres: Array<string>;
  selectedYear: string | null;
  ratingFrom: number | undefined;
  ratingTo: number | undefined;
  sortBy: (typeof API_SORT_OPTIONS)[number]["value"];
  page: number;
}

const initialState: FiltersState = {
  selectedGenres: [],
  selectedYear: null,
  ratingFrom: undefined,
  ratingTo: undefined,
  sortBy: DEFAULT_SORT_OPTION,
  page: 1,
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setGenres: (state, action: PayloadAction<Array<string>>) => {
      state.selectedGenres = action.payload;
      state.page = 1;
    },
    setReleaseYear: (state, action: PayloadAction<string | null>) => {
      state.selectedYear = action.payload;
      state.page = 1;
    },
    setRatingFrom: (state, action: PayloadAction<number | undefined>) => {
      state.ratingFrom = action.payload;
      state.page = 1;

      if (
        action.payload !== undefined &&
        state.ratingTo !== undefined &&
        action.payload > state.ratingTo
      ) {
        state.ratingTo = action.payload;
      }
    },

    incrementRatingFrom: (state) => {
      state.page = 1;
      if (state.ratingFrom === undefined) {
        state.ratingFrom = 0;
        return;
      }
      if (state.ratingFrom < MAX_RATING) {
        //увеличивает значение ratingFrom на 1, если оно меньше MAX_RATING, эффективно перемещая границу рейтинга слева направо.
        state.ratingFrom += 1;
      }
      if (state.ratingTo !== undefined && state.ratingFrom > state.ratingTo) {
        //Устанавливает для свойства ratingTo в объекте состояния state значение свойства ratingFrom. Это эффективно сдвигает правую границу рейтинга в то же положение, что и левая граница.
        state.ratingTo = state.ratingFrom;
      }
    },

    decrementRatingFrom: (state) => {
      state.page = 1;
      if (state.ratingFrom === undefined) {
        return;
      }
      if (state.ratingFrom === 0) {
        //равно ли свойство ratingFrom в объекте состояния state значению 0. Если оно равно 0, это означает, что граница рейтинга достигла своего минимального значения, и функция устанавливает свойство ratingFrom в значение undefined, эффективно удаляя границу.
        state.ratingFrom = undefined;
        return;
      }
      state.ratingFrom -= 1; //. Если ни одно из предыдущих условий не выполняется, функция вычитает 1 из свойства ratingFrom в объекте состояния state, эффективно перемещая левую границу рейтинга на один шаг вправо.
    },

    setRatingTo: (state, action: PayloadAction<number | undefined>) => {
      state.page = 1;
      state.ratingTo = action.payload;
      if (
        state.ratingFrom !== undefined &&
        action.payload !== undefined &&
        action.payload < state.ratingFrom
      ) {
        state.ratingTo = Math.max(0, state.ratingFrom ?? 0);
        //Эта функция возвращает наибольшее из двух значений: 0 и значение свойства ratingFrom (если оно не равно undefined) или 0 (если свойство ratingFrom равно undefined). Это гарантирует, что правая граница рейтинга никогда не будет меньше 0.
        return;
      }
    },
    incrementRatingTo: (state) => {
      state.page = 1;
      if (state.ratingTo === undefined) {
        state.ratingTo = Math.max(0, state.ratingFrom ?? 0);
        return;
      }
      if (state.ratingTo < MAX_RATING) {
        state.ratingTo += 1;
      }
    },

    decrementRatingTo: (state) => {
      state.page = 1;
      if (state.ratingTo === undefined) {
        return;
      }
      if (state.ratingTo === 0) {
        state.ratingTo = undefined; //удаляем границу
        return;
      }
      state.ratingTo -= 1;
      if (state.ratingFrom !== undefined && state.ratingTo < state.ratingFrom) {
        state.ratingFrom = state.ratingTo;
      }
    },
    setSortBy: (
      state,
      action: PayloadAction<(typeof API_SORT_OPTIONS)[number]["value"] | null>
    ) => {
      state.page = 1;
      state.sortBy = action.payload || DEFAULT_SORT_OPTION;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    resetFilters: (state) => {
      state.selectedGenres = initialState.selectedGenres;
      state.selectedYear = initialState.selectedYear;
      state.ratingFrom = initialState.ratingFrom;
      state.ratingTo = initialState.ratingTo;
      state.page = 1;
    },
  },
});

export const {
  setGenres,
  setReleaseYear,
  setRatingFrom,
  incrementRatingFrom,
  decrementRatingFrom,
  setRatingTo,
  incrementRatingTo,
  decrementRatingTo,
  setSortBy,
  setPage,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;

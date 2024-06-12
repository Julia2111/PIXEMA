import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../Types/Types";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (search, { rejectWithValue }) => {
    try {
      const moviesArray = [];
      let page = 1;

      while (page <= 4) {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=ab5aa083&s=Barbie&page=${page}`
        );
        const movies = await res.json();
        movies.Search.forEach((movie) => moviesArray.push(movie));
        page++;
      }
      return moviesArray;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    result: null,
    searchMovies: "",
    status: null as null | "loading" | "fulfilled" | "rejected",
    error: null as null | string,
  },
  reducers: {
    setSearchMovies(state, action) {
      state.searchMovies = action.payload;
      console.log("action.payload", action.payload);
    },
    setSearchChange(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.error = null;
        state.movies = action.payload;
        state.result = state.movies.map((movie: Movie) =>
          movie.Title.includes(state.searchMovies)
        );
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload as string;
      });
  },
});

export const { setSearchMovies, setSearchChange } = moviesSlice.actions;
export default moviesSlice.reducer;

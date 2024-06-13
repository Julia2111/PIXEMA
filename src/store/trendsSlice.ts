import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTrendsMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const trendsMoviesList = [];

      let page = 1;
      while (page <= 2) {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=ab5aa083&s=Teen&page=${page}`
        );
        const movies = await res.json();
        movies.Search.filter((movie) => {
          movie.Year > "2008"
            ? trendsMoviesList.push(movie)
            : console.log("All this movies dont fit");
        });
        page++;
      }
      return trendsMoviesList;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const trendsSlice = createSlice({
  name: "trends",
  initialState: {
    trendsMovies: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendsMovies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTrendsMovies.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.error = null;
        state.trendsMovies = action.payload;
      })
      .addCase(fetchTrendsMovies.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload as string;
      });
  },
});
export const { addTrendsMovies } = trendsSlice.actions;
export default trendsSlice.reducer;

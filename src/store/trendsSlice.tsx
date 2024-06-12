import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTrendsMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const trendsMovies = [];

      let page = 1;
      while (page <= 3) {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=ab5aa083&s=Barbie&page=${page}`
        );
        const movies = await res.json();
        movies.Search.filter((movie) => {
          movie.imdbRating > "6,5"
            ? trendsMovies.push(movie)
            : console.log("Nothing to show");
        });
        page++;
      }
      return trendsMovies;
    } catch (error) {
      console.log("mistake here", error);
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
export const { TrendsMovies } = trendsSlice.actions;
export default trendsSlice.reducer;

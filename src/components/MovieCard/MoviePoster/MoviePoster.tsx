import { Image } from "@mantine/core";

import noPosterImage from "../../../assets/no_pic.png";
import { API_BASE_URL, API_ROUTES } from "../../../api/app";
import { Movie, MovieDetails } from "../../../Types/Types";

interface MoviePosterProps {
  movie: Movie | MovieDetails;
  size?: "sm" | "lg";
}

const MoviePoster = ({ movie, size = "sm" }: MoviePosterProps) => (
  <Image
    display={{ base: "none", xs: "block" }}
    w={size === "sm" ? 119 : { base: 200, xs: 250 }}
    alt={movie.Title}
    fallbackSrc={noPosterImage}
    src={
      movie.Poster
        ? `${API_BASE_URL}${API_ROUTES.IMAGES}${movie.Poster}`
        : noPosterImage
    }
  />
);

export default MoviePoster;

import React from "react";
import { SearchResult } from "../../../graphql/types";
import { Poster } from "./Styles";
import { placeholder } from "../../../assets/img";

interface MovieListItemProps extends SearchResult {
  onSelectMovie: (movieId: number) => void;
}

const MovieListItem: React.FC<MovieListItemProps> = ({
  id,
  poster_path,
  onSelectMovie,
}) => {
  const poster = poster_path
    ? `${process.env.REACT_APP_POSTER_URL}/w185/${poster_path!}`
    : placeholder;

  return <Poster src={poster} onClick={() => onSelectMovie(id)}></Poster>;
};

export default MovieListItem;

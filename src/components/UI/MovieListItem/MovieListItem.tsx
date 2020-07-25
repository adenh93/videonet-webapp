import React from "react";
import { SearchResult } from "../../../graphql/types";
import { Poster } from "./Styles";

interface MovieListItemProps extends SearchResult {
  onSelectMovie: (movieId: number) => void;
}

const MovieListItem: React.FC<MovieListItemProps> = ({
  id,
  poster_path,
  onSelectMovie,
}) => {
  return (
    <Poster
      src={`${process.env.REACT_APP_POSTER_URL}/w185/${poster_path!}`}
      onClick={() => onSelectMovie(id)}
    ></Poster>
  );
};

export default MovieListItem;

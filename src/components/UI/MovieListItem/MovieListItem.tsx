import React from "react";
import { SearchResult } from "../../../graphql/types";
import { Poster } from "./Styles";

interface MovieListItemProps extends SearchResult {}

const MovieListItem: React.FC<MovieListItemProps> = ({ poster_path }) => {
  return (
    <Poster
      src={`${process.env.REACT_APP_POSTER_URL}/w185/${poster_path!}`}
    ></Poster>
  );
};

export default MovieListItem;

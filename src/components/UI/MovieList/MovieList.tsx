import React from "react";
import { SearchResult } from "../../../graphql/types";
import { ListContainer, MovieItemContainer } from "./Styles";
import MovieListItem from "../MovieListItem";

interface MovieListProps {
  movies: SearchResult[];
  onSelectMovie: (movieId: number) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onSelectMovie }) => (
  <ListContainer>
    {movies.map((movie) => (
      <MovieItemContainer key={movie.id}>
        <MovieListItem {...movie} onSelectMovie={onSelectMovie} />
      </MovieItemContainer>
    ))}
  </ListContainer>
);

export default MovieList;

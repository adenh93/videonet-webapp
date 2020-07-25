import { gql } from "apollo-boost";

export const SEARCH_MOVIES = gql`
  query($query: String, $filter: PagingInput) {
    search(query: $query, filter: $filter) {
      id
      title
      poster_path
    }
  }
`;

export const GET_MOVIE_DETAILS = gql`
  query($movieId: ID!) {
    details(movieId: $movieId) {
      id
      title
      overview
      poster_path
      backdrop_path
    }
  }
`;

import { gql } from "apollo-boost";

export const SEARCH_MOVIES = gql`
  query($query: String, $filter: PagingInput) {
    search(query: $query, filter: $filter) {
      page
      total_pages
      total_results
      results {
        id
        title
        poster_path
      }
    }
  }
`;

export const GET_MOVIE_DETAILS = gql`
  query($movieId: Int!) {
    details(movieId: $movieId) {
      id
      title
      overview
      release_date
      poster_path
      backdrop_path
      status
      genres {
        name
      }
    }
  }
`;

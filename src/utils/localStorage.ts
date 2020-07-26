import { FilmDetails, SearchResult } from "../graphql/types";

type LocalStorageCollection = "WATCHED_ITEMS" | "LIKED_ITEMS";

export const setItem = <T>(type: LocalStorageCollection, item: T): void =>
  localStorage.setItem(type, JSON.stringify(item));

export const getItems = <R>(type: LocalStorageCollection): R[] => {
  const items = localStorage.getItem(type);
  if (!items) return [];
  return JSON.parse(items) as R[];
};

export const getWatchList = (): SearchResult[] =>
  getItems<SearchResult>("WATCHED_ITEMS");

export const isInWatchList = (movieId: number): boolean =>
  getWatchList().find((m) => m.id === movieId) !== undefined;

export const addToWatchList = (movie: FilmDetails): void => {
  const movies = getWatchList();
  if (!movies.find((m) => m.id === movie.id))
    setItem("WATCHED_ITEMS", [...movies, movie]);
};

export const removeFromWatchList = (movieId: number): void =>
  setItem(
    "WATCHED_ITEMS",
    getWatchList().filter((m) => m.id !== movieId)
  );

export const getLikedMovies = (): number[] => getItems<number>("LIKED_ITEMS");

export const isLiked = (movieId: number): boolean =>
  getLikedMovies().find((item) => item === movieId) !== undefined;

export const likeMovie = (movieId: number): void => {
  const likedItems = getLikedMovies();
  if (!likedItems.find((item) => item === movieId))
    setItem("LIKED_ITEMS", [...likedItems, movieId]);
};

export const unlikeMovie = (movieId: number): void => {
  setItem(
    "LIKED_ITEMS",
    getLikedMovies().filter((item) => item !== movieId)
  );
};

export const toggleWatched = (movie: FilmDetails): boolean => {
  const watched = isInWatchList(movie.id);
  watched ? removeFromWatchList(movie.id) : addToWatchList(movie);
  return !watched;
};

export const toggleLiked = (movieId: number): boolean => {
  const liked = isLiked(movieId);
  liked ? unlikeMovie(movieId) : likeMovie(movieId);
  return !liked;
};

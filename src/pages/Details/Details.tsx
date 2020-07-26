import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useQuery } from "react-apollo";
import { GET_MOVIE_DETAILS } from "../../graphql/query";
import { Query } from "../../graphql/types";
import { landscape } from "../../assets/img/";
import { MovieInfo, Toolbar } from "./components";
import {
  DetailsBackground as Background,
  Container,
  DetailsContainer,
  PosterContainer,
  Poster,
} from "./Styles";
import {
  toggleWatched,
  toggleLiked,
  isLiked,
  isInWatchList,
} from "../../utils/localStorage";

const Details: React.FC = () => {
  const history = useHistory();
  const params = useParams<{ movieId: string }>();
  const baseImageUrl = process.env.REACT_APP_POSTER_URL;

  const [watched, setWatched] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);

  const { loading, data } = useQuery<Query>(GET_MOVIE_DETAILS, {
    variables: { movieId: +params.movieId },
    onCompleted: (data) => {
      setWatched(isLiked(data!.details!.id));
      setLiked(isInWatchList(data!.details!.id));
    },
  });

  const getBackgroundImage = () =>
    data?.details.backdrop_path
      ? `${baseImageUrl}/w1280${data?.details.backdrop_path}`
      : landscape;

  const onClickWatched = (): void => setWatched(toggleWatched(data!.details!));
  const onClickLike = (): void => setLiked(toggleLiked(data!.details!.id));
  const onClickBack = (): void => history.push("/Browse");

  return (
    <Background image={getBackgroundImage()}>
      <Container>
        {loading ? null : (
          <>
            <DetailsContainer>
              <MovieInfo {...data!.details!} />
              <Toolbar
                liked={liked}
                watched={watched}
                onClickWatched={onClickWatched}
                onClickLike={onClickLike}
                onClickBack={onClickBack}
              />
            </DetailsContainer>
            <PosterContainer>
              <Poster
                src={`${baseImageUrl}/w500${data?.details.poster_path}`}
              />
            </PosterContainer>
          </>
        )}
      </Container>
    </Background>
  );
};

export default Details;

import React from "react";
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

const Details: React.FC = () => {
  const history = useHistory();
  const params = useParams<{ movieId: string }>();
  const baseImageUrl = process.env.REACT_APP_POSTER_URL;

  const { loading, data } = useQuery<Query>(GET_MOVIE_DETAILS, {
    variables: { movieId: +params.movieId },
  });

  const onClickWatched = () => console.log("Watched");
  const onClickLike = () => console.log("Liked");
  const onClickBack = () => history.push("/Browse");

  const getBackgroundImage = () =>
    data?.details.backdrop_path
      ? `${baseImageUrl}/w1280${data?.details.backdrop_path}`
      : landscape;

  return (
    <Background image={getBackgroundImage()}>
      <Container>
        {loading ? null : (
          <>
            <DetailsContainer>
              <MovieInfo {...data!.details!} />
              <Toolbar
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

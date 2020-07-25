import React from "react";
import { useParams } from "react-router";
import { useQuery } from "react-apollo";
import { GET_MOVIE_DETAILS } from "../../graphql/query";
import { Query } from "../../graphql/types";
import { landscape } from "../../assets/img/";
import { MovieInfo, Toolbar } from "./components";
import {
  Background,
  Container,
  DetailsContainer,
  PosterContainer,
  Poster,
} from "./Styles";

const Details: React.FC = () => {
  const params = useParams<{ movieId: string }>();
  const baseImageUrl = process.env.REACT_APP_POSTER_URL;

  const { loading, data } = useQuery<Query>(GET_MOVIE_DETAILS, {
    variables: { movieId: +params.movieId },
  });

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
              <Toolbar />
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

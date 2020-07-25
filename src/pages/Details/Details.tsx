import React from "react";
import { useParams } from "react-router";
import { useQuery } from "react-apollo";
import { GET_MOVIE_DETAILS } from "../../graphql/query";
import { Query } from "../../graphql/types";
import { Title, Subtitle, Body } from "../../components/Typography";
import { Section } from "../../components/UI";
import {
  Background,
  Container,
  DetailsContainer,
  PosterContainer,
  Poster,
} from "./Styles";
import { landscape } from "../../assets/img/";

const Details: React.FC = () => {
  const params = useParams<{ movieId: string }>();
  const baseImageUrl = process.env.REACT_APP_POSTER_URL;

  const { loading, data } = useQuery<Query>(GET_MOVIE_DETAILS, {
    variables: { movieId: +params.movieId },
  });

  const getBackgroundImage = () =>
    loading ? landscape : `${baseImageUrl}/w1280${data?.details.backdrop_path}`;

  const getContent = () =>
    loading ? null : (
      <>
        <DetailsContainer>
          <Title>{data?.details.title}</Title>
          <Subtitle>
            {data?.details.release_date.substr(0, 4)} |{" "}
            {data?.details.genres.map((g) => g.name).join(", ")} |{" "}
            {data?.details.status}
          </Subtitle>
          <Section mt={2.5}>
            <Body>{data?.details.overview}</Body>
          </Section>
        </DetailsContainer>
        <PosterContainer>
          <Poster src={`${baseImageUrl}/w500${data?.details.poster_path}`} />
        </PosterContainer>
      </>
    );

  return (
    <Background image={getBackgroundImage()}>
      <Container>{getContent()}</Container>
    </Background>
  );
};

export default Details;

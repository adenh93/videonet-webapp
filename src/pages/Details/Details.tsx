import React from "react";
import { useParams } from "react-router";
import { useQuery } from "react-apollo";
import { GET_MOVIE_DETAILS } from "../../graphql/query";
import { Query } from "../../graphql/types";
import { Title, Subtitle, Body } from "../../components/Typography";
import { Background } from "./Styles";
import { Content } from "../../components/UI";
import { landscape } from "../../assets/img/";

const Details: React.FC = () => {
  const params = useParams<{ movieId: string }>();

  const { loading, data } = useQuery<Query>(GET_MOVIE_DETAILS, {
    variables: { movieId: +params.movieId },
  });

  const getBackgroundImage = () =>
    loading
      ? landscape
      : `${process.env.REACT_APP_POSTER_URL}/w1280${data?.details.backdrop_path}`;

  const getContent = () =>
    loading ? (
      <Title>Loading...</Title>
    ) : (
      <>
        <Title>{data?.details.title}</Title>
        <Subtitle>
          {data?.details.release_date.substr(0, 4)} |{" "}
          {data?.details.genres.map((g) => g.name).join(", ")} |{" "}
          {data?.details.status}
        </Subtitle>
        <Body>{data?.details.overview}</Body>
      </>
    );

  return (
    <Background image={getBackgroundImage()}>
      <Content>{getContent()}</Content>
    </Background>
  );
};

export default Details;

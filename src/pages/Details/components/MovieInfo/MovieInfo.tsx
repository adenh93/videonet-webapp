import React from "react";
import { Title, Subtitle, Body } from "../../../../components/Typography";
import { Section } from "../../../../components/UI";
import { FilmDetails } from "../../../../graphql/types";

export interface MovieInfoProps extends FilmDetails {}

const MovieInfo: React.FC<MovieInfoProps> = ({
  title,
  release_date,
  genres,
  overview,
  status,
}) => (
  <>
    <Title>{title}</Title>
    <Subtitle>
      {release_date.substr(0, 4)} | {genres.map((g) => g.name).join(", ")} |{" "}
      {status}
    </Subtitle>
    <Section mt={2.5}>
      <Body>{overview}</Body>
    </Section>
  </>
);

export default MovieInfo;

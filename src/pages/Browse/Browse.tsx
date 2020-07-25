import React, { useRef } from "react";
import { Background } from "./Styles";
import { Header, Subheader } from "../../components/Typography";
import { Content, SearchInput, Section, MovieList } from "../../components/UI";
import { SEARCH_MOVIES } from "../../graphql/query";
import { useQuery } from "react-apollo";
import { Query } from "../../graphql/types";
import { useHistory } from "react-router";

const Browse: React.FC = () => {
  const history = useHistory();
  const searchInput = useRef<HTMLInputElement>(null);
  const { loading, error, data, refetch } = useQuery<Query>(SEARCH_MOVIES);

  const onSelectMovie = (id: number) => history.push(`/Details/${id}`);
  const onSearch = () => refetch({ query: searchInput.current?.value });

  const getSubheader = (): string => {
    const query = searchInput.current?.value;
    return query ? `Search Results For "${query}":` : "Discovered For You:";
  };

  const getContents = () => {
    if (loading) return <Subheader>Loading results...</Subheader>;
    else if (error)
      return <Subheader>An error occurred while loading results.</Subheader>;
    else
      return (
        <>
          <Subheader>{getSubheader()}</Subheader>
          <Section mt={5}>
            <MovieList movies={data?.search!} onSelectMovie={onSelectMovie} />
          </Section>
        </>
      );
  };

  return (
    <Background>
      <Content>
        <Header>Browse All Titles</Header>
        <Section mt={5}>
          <SearchInput
            ref={searchInput}
            onSearch={onSearch}
            placeholder="Enter a title, description, etc..."
          />
        </Section>
        <Section mt={5}>{getContents()}</Section>
      </Content>
    </Background>
  );
};

export default Browse;

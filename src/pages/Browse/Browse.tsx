import React, { useRef, useState } from "react";
import { BrowseBackground as Background } from "./Styles";
import { Header, Subheader } from "../../components/Typography";
import { Content, SearchInput, Section, MovieList } from "../../components/UI";
import { SEARCH_MOVIES } from "../../graphql/query";
import { useQuery } from "react-apollo";
import { Query } from "../../graphql/types";
import { useHistory } from "react-router";

const Browse: React.FC = () => {
  const history = useHistory<{ query: string }>();
  const queryState = history.location.state?.query;
  const [query, setQuery] = useState<string>(queryState || "");

  const { loading, error, data, refetch } = useQuery<Query>(SEARCH_MOVIES, {
    variables: { query: queryState },
  });

  const onSelectMovie = (id: number) => history.push(`/Details/${id}`);
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    refetch({ query });
  };

  const getContents = () => {
    if (loading) return <Subheader>Loading results...</Subheader>;
    else if (error)
      return <Subheader>An error occurred while loading results.</Subheader>;
    else
      return (
        <>
          <Subheader>Search Results</Subheader>
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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

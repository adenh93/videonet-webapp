import React, { useState, useEffect } from "react";
import { BrowseBackground as Background } from "./Styles";
import { Header, Subheader } from "../../components/Typography";
import { Content, SearchInput, Section, MovieList } from "../../components/UI";
import { SEARCH_MOVIES } from "../../graphql/query";
import { useQuery } from "react-apollo";
import { Query } from "../../graphql/types";
import { useHistory } from "react-router";
import { Pagination } from "./components";

const Browse: React.FC = () => {
  const history = useHistory<{ query: string }>();
  const queryState = history.location.state?.query;

  const [query, setQuery] = useState<string>(queryState || "");
  const [filter, setFilter] = useState<{ page: number }>({ page: 1 });

  const { loading, error, data, refetch } = useQuery<Query>(SEARCH_MOVIES, {
    variables: { query: queryState, filter },
  });

  useEffect(() => {
    refetch({ query, filter });
  }, [filter]);

  const onSelectMovie = (id: number) => history.push(`/Details/${id}`);
  const onClickPrev = () => setFilter({ page: filter.page - 1 });
  const onClickNext = () => setFilter({ page: filter.page + 1 });

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilter({ page: 1 });
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
            <MovieList
              movies={data!.search!.results!}
              onSelectMovie={onSelectMovie}
            />
          </Section>
          <Section mt={3} mb={5}>
            <Pagination
              page={filter.page}
              totalPages={data!.search!.total_pages}
              onClickPrev={onClickPrev}
              onClickNext={onClickNext}
            />
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

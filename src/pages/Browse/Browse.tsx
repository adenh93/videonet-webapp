import React, { useState } from "react";
import { BrowseBackground as Background } from "./Styles";
import { Header, Subheader } from "../../components/Typography";
import { Content, SearchInput, Section, MovieList } from "../../components/UI";
import { SEARCH_MOVIES } from "../../graphql/query";
import { useQuery } from "react-apollo";
import { Query } from "../../graphql/types";
import { useHistory } from "react-router";
import { Pagination, ResultsCount } from "./components";

const Browse: React.FC = () => {
  const history = useHistory<{ query: string }>();
  const queryState = history.location.state?.query;

  const [query, setQuery] = useState<string>(queryState || "");
  const [lastQuery, setLastQuery] = useState<string>(query);

  const { loading, error, data, refetch } = useQuery<Query>(SEARCH_MOVIES, {
    variables: { query: queryState },
  });

  const reloadResults = (page: number = 1) =>
    refetch({ query, filter: { page } });

  const onSelectMovie = (id: number) => history.push(`/Details/${id}`);
  const onClickPrev = () => reloadResults(data!.search!.page - 1);
  const onClickNext = () => reloadResults(data!.search!.page + 1);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLastQuery(query);
    reloadResults();
  };

  const getContents = () => {
    if (loading) return <Subheader>Loading results...</Subheader>;
    else if (error)
      return <Subheader>An error occurred while loading results.</Subheader>;
    else
      return (
        <>
          <ResultsCount query={lastQuery} data={data!.search} />
          <Section mt={2}>
            <MovieList
              movies={data!.search!.results!}
              onSelectMovie={onSelectMovie}
            />
          </Section>
          {data!.search!.results.length ? (
            <Section mt={3} mb={5}>
              <Pagination
                page={data!.search!.page}
                totalPages={data!.search!.total_pages}
                onClickPrev={onClickPrev}
                onClickNext={onClickNext}
              />
            </Section>
          ) : null}
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

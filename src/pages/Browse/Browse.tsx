import React, { useRef } from "react";
import { Background } from "./Styles";
import { Header, Subheader } from "../../components/Typography";
import { Content, SearchInput, Section } from "../../components/UI";
import { SEARCH_MOVIES } from "../../graphql/query";
import { useQuery } from "react-apollo";
import { Query } from "../../graphql/types";

const Browse: React.FC = () => {
  const { loading, error, data, refetch } = useQuery<Query>(SEARCH_MOVIES);
  const searchInput = useRef<HTMLInputElement>(null);

  const onSearch = (): void => {
    const query = searchInput.current?.value;
    if (query) refetch({ query });
  };

  const getHeading = () => {
    if (loading) return <Subheader>Loading results...</Subheader>;
    else if (error)
      return <Subheader>An error occurred while loading results.</Subheader>;
    else return <Subheader>Search results</Subheader>;
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
        <Section mt={5}>{getHeading()}</Section>
      </Content>
    </Background>
  );
};

export default Browse;

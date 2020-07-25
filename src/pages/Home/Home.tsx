import React, { useState } from "react";
import { useHistory } from "react-router";
import { Background } from "./Styles";
import { Header, Subheader } from "../../components/Typography";
import { Content, SearchInput, Section } from "../../components/UI";

const Home: React.FC = () => {
  const history = useHistory();
  const [query, setQuery] = useState<string>("");
  const onSearch = () => history.push("/Browse", { query });

  return (
    <Background>
      <Content>
        <Header>All of your favourites.</Header>
        <Header>One place.</Header>
        <Section mt={12}>
          <Subheader>Browse All Titles</Subheader>
          <Section mt={4}>
            <SearchInput
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
              onSearch={onSearch}
              placeholder="Enter a title, description, etc..."
            />
          </Section>
        </Section>
      </Content>
    </Background>
  );
};

export default Home;

import React from "react";
import { Background } from "./Styles";
import { Header, Subheader } from "../../components/Typography";
import { Content, SearchInput, Section } from "../../components/UI";

const Home: React.FC = () => (
  <Background>
    <Content>
      <Header>All of your favourites.</Header>
      <Header>One place.</Header>
      <Section mt={12}>
        <Subheader>Browse All Titles</Subheader>
        <Section mt={4}>
          <SearchInput
            onSearch={() => {}}
            placeholder="Enter a title, description, etc..."
          />
        </Section>
      </Section>
    </Content>
  </Background>
);

export default Home;

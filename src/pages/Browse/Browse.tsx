import React from "react";
import { Background } from "./Styles";
import { Header } from "../../components/Typography";
import { Content, SearchInput, Section } from "../../components/UI";

const Browse: React.FC = () => (
  <Background>
    <Content>
      <Header>Browse All Titles</Header>
      <Section mt={5}>
        <SearchInput
          onSearch={() => {}}
          placeholder="Enter a title, description, etc..."
        />
      </Section>
    </Content>
  </Background>
);

export default Browse;

import React from "react";
import { Background } from "./Styles";
import { Header, Subheader } from "../../components/Typography";
import { Content, Input } from "../../components/UI";
import { search } from "../../assets/icons";

const Home: React.FC = () => (
  <Background>
    <Content>
      <Header>All of your favourites.</Header>
      <Header>One place.</Header>
      <div style={{ marginTop: "15rem" }}>
        <Subheader>Browse All Titles</Subheader>
        <div style={{ marginTop: "4rem" }}>
          <Input
            icon={search}
            placeholder="Enter a title, description, etc..."
          />
        </div>
      </div>
    </Content>
  </Background>
);

export default Home;

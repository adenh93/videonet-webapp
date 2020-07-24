import React from "react";
import { Header } from "../../components/Typography";
import { Background, Content } from "./Styles";

const Home: React.FC = () => (
  <Background>
    <Content>
      <Header>All of your favourites.</Header>
      <Header>One place.</Header>
    </Content>
  </Background>
);

export default Home;

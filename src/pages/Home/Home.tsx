import React from "react";
import { Header } from "../../components/Typography";
import { Background } from "./Styles";
import { Content } from "../../components/UI";

const Home: React.FC = () => (
  <Background>
    <Content>
      <Header>All of your favourites.</Header>
      <Header>One place.</Header>
    </Content>
  </Background>
);

export default Home;

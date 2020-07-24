import React from "react";
import { Background } from "./Styles";
import { Header } from "../../components/Typography";
import { Content } from "../../components/UI";

const Browse: React.FC = () => (
  <Background>
    <Content>
      <Header>Hello from Browse</Header>
    </Content>
  </Background>
);

export default Browse;

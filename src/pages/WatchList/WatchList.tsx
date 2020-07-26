import React from "react";
import { WatchListBackground as Background } from "./Styles";
import { Header } from "../../components/Typography";
import { Content } from "../../components/UI";

const WatchList: React.FC = () => (
  <Background>
    <Content>
      <Header>Hello from Watchlist</Header>
    </Content>
  </Background>
);

export default WatchList;

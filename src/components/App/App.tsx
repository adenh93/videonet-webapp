import React from "react";
import Routes from "../Routes";
import Navbar from "../UI/Navbar";
import { brand, profile } from "../../assets/img/";
import { Container } from "./Styles";
import { NavRoute } from "../../types/interfaces";

const routes: NavRoute[] = [
  { display: "Home", route: "/Home" },
  { display: "Browse", route: "/Browse" },
  { display: "Watch List", route: "/Watchlist" },
];

function App() {
  return (
    <Container>
      <Navbar brandImg={brand} routes={routes} profileImg={profile} />
      <Routes />
    </Container>
  );
}

export default App;

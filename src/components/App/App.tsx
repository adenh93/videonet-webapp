import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";
import { Container } from "./Styles";
import { Navbar } from "../UI";
import { brand, profile } from "../../assets/img/";
import { NavRoute } from "../../types/interfaces";

const routes: NavRoute[] = [
  { display: "Home", route: "/Home" },
  { display: "Browse", route: "/Browse" },
  { display: "Watch List", route: "/Watchlist" },
];

function App() {
  return (
    <Container>
      <Router>
        <Navbar brandImg={brand} routes={routes} profileImg={profile} />
        <Routes />
      </Router>
    </Container>
  );
}

export default App;

import React from "react";
import { WatchListBackground as Background } from "./Styles";
import { Header, Subheader } from "../../components/Typography";
import { Content, MovieList, Section, Button } from "../../components/UI";
import { getWatchList } from "../../utils/localStorage";
import { useHistory } from "react-router";

const WatchList: React.FC = () => {
  const history = useHistory();
  const watchList = getWatchList();

  const onSelectMovie = (id: number) => history.push(`/Details/${id}`);
  const onClickBrowse = () => history.push("/Browse");

  return (
    <Background>
      <Content>
        <Header>My Watchlist</Header>
        <Section mt={4}>
          {watchList.length ? (
            <>
              <Subheader>
                You've Watched {watchList.length} Movie
                {watchList.length > 1 && "s"}
              </Subheader>
              <Section mt={5}>
                <MovieList movies={watchList} onSelectMovie={onSelectMovie} />
              </Section>
            </>
          ) : (
            <>
              <Subheader>Your Watch List Is Empty</Subheader>
              <Section mt={6}>
                <Button color="primary" onClick={onClickBrowse}>
                  Browse
                </Button>
              </Section>
            </>
          )}
        </Section>
      </Content>
    </Background>
  );
};

export default WatchList;

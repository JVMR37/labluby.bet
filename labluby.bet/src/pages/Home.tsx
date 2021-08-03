import { useHistory } from "react-router-dom";
import {
  HomeRow,
  RecentGameStyledSpan,
  FilterStyledSpan,
  FilterStyledDiv,
  NewBetStyledDiv,
  FilterGameStyledButton,
  NewBetStyledButton,
} from "../styles/home.style";

import RecentGameComponent from "../components/RecentGameComponent";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { loadGames, selectAvailableGames } from "../store/gamesSlice";
import { FaArrowRight } from "react-icons/fa";
import { Fragment, useCallback, useState } from "react";

const Home: React.FC = () => {
  const history = useHistory();
  const games = useAppSelector(selectAvailableGames);
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState("");

  const newBetButtonHandler = useCallback(
    async (event: any) => {
      event.preventDefault();

      const result = await dispatch(loadGames());

      if (result.meta.requestStatus === "fulfilled") {
        history.push("/new-bet");
      }
    },
    [dispatch, history]
  );

  const filterButtonHandler = useCallback(async (event: any) => {
    event.preventDefault();

    const game = event.target.textContent;

    setFilter(game);
  }, []);

  const filterButtonsElements = useCallback(
    () =>
      games.map((game: any) => (
        <FilterGameStyledButton
          gameColor={game.color}
          onClick={filterButtonHandler}
        >
          {game.type}
        </FilterGameStyledButton>
      )),
    [filterButtonHandler, games]
  )();

  return (
    <Fragment>
      <HomeRow>
        <RecentGameStyledSpan>RECENT GAME</RecentGameStyledSpan>
        <FilterStyledDiv>
          <FilterStyledSpan>Filters</FilterStyledSpan>
          {filterButtonsElements}
        </FilterStyledDiv>
        <NewBetStyledDiv>
          <NewBetStyledButton isPrimary onClick={newBetButtonHandler}>
            New Bet <FaArrowRight />
          </NewBetStyledButton>
        </NewBetStyledDiv>
      </HomeRow>
      <RecentGameComponent filter={filter} />
    </Fragment>
  );
};

export default Home;

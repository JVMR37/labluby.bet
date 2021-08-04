import { Fragment, useCallback, useState } from "react";
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

import { useAppSelector } from "../hooks/hooks";
import { selectAvailableGames } from "../store/gamesSlice";
import { FaArrowRight } from "react-icons/fa";
import Game from "../models/Game";

const Home: React.FC = () => {
  const history = useHistory();
  const games = useAppSelector(selectAvailableGames) as Array<Game>;
  const [filter, setFilter] = useState("");

  const newBetButtonHandler = useCallback(
    async (event: any) => {
      event.preventDefault();
      history.push("/new-bet");
    },
    [history]
  );

  const filterButtonHandler = useCallback(
    async (event: any) => {
      event.preventDefault();

      const game = event.target.textContent;

      if (filter === game) {
        setFilter("");
      } else {
        setFilter(game);
      }
    },
    [filter]
  );

  const filterButtonsElements = useCallback(
    () =>
      games.map((game: any) => (
        <FilterGameStyledButton
          isSelected={game.type === filter}
          gameColor={game.color}
          onClick={filterButtonHandler}
        >
          {game.type}
        </FilterGameStyledButton>
      )),
    [filter, filterButtonHandler, games]
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
      <RecentGameComponent key={filter} filter={filter} />
    </Fragment>
  );
};

export default Home;

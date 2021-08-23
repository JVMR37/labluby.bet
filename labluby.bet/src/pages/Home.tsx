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
  GameFilterRowStyledDiv,
} from "../styles/home.style";

import RecentGameComponent from "../components/RecentGameComponent";

import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { loadSavedBets, selectAvailableGames } from "../store/gamesSlice";
import { FaArrowRight } from "react-icons/fa";
import Game from "../models/Game";

const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const games = useAppSelector(selectAvailableGames) as Array<Game>;
  const [filter, setFilter] = useState(0);

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

      const typeId = event.target.getAttribute("data-id") as number;

      if (filter === typeId) {
        dispatch(loadSavedBets({ page: 1 }));

        setFilter(0);
      } else {
        dispatch(loadSavedBets({ page: 1, filter: typeId.toString() }));

        setFilter(typeId);
      }
    },
    [dispatch, filter]
  );

  const filterButtonsElements = useCallback(
    () =>
      games.map((game: Game) => (
        <FilterGameStyledButton
          key={game.id}
          // eslint-disable-next-line eqeqeq
          isSelected={game.id == filter}
          gameColor={game.color}
          onClick={filterButtonHandler}
          data-id={game.id}
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
          <GameFilterRowStyledDiv>
            {filterButtonsElements}
          </GameFilterRowStyledDiv>
        </FilterStyledDiv>
        <NewBetStyledDiv>
          <NewBetStyledButton isPrimary onClick={newBetButtonHandler}>
            New Bet <FaArrowRight />
          </NewBetStyledButton>
        </NewBetStyledDiv>
      </HomeRow>
      <RecentGameComponent key={filter} />
    </Fragment>
  );
};

export default Home;

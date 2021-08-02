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

import { useAppDispatch } from "../hooks/hooks";
import { loadGames } from "../store/gamesSlice";
import { FaArrowRight } from "react-icons/fa";

const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const newBetButtonHandler = async (event: any) => {
    event.preventDefault();

    const result = await dispatch(loadGames());

    if (result.meta.requestStatus === "fulfilled") {
      history.push("/new-bet");
    }
  };

  return (
    <HomeRow>
      <RecentGameStyledSpan>RECENT GAME</RecentGameStyledSpan>
      <FilterStyledDiv>
        <FilterStyledSpan>Filters</FilterStyledSpan>
        <FilterGameStyledButton gameColor={"red"}>
          Lotofácil
        </FilterGameStyledButton>

        <FilterGameStyledButton gameColor={"green"}>
          Lotomania
        </FilterGameStyledButton>
        <FilterGameStyledButton gameColor={"tea"}>
          MegaSena
        </FilterGameStyledButton>
      </FilterStyledDiv>
      <NewBetStyledDiv>
        <NewBetStyledButton isPrimary onClick={newBetButtonHandler}>
          New Bet <FaArrowRight />
        </NewBetStyledButton>
      </NewBetStyledDiv>
    </HomeRow>
  );
};

export default Home;

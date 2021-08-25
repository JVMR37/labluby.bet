import { useCallback } from "react";
import {
  RecentGameStyledColumn,
  GameStyledDiv,
  NameGameStyledSpan,
  NumbersStyledSpan,
  DatePriceStyledSpan,
  GameDatePriceRow,
  NoGamesStyledSpan,
  NoGamesStyledDiv,
  NoGamesBoldStyledSpan,
} from "../styles/recentGameComponent.style";
import { getSavedGames } from "../store/gamesSlice";
import { useAppSelector } from "../hooks/hooks";
import SavedGame from "../models/SavedGame";
import BetPagination from "./BetPagination";

const RecentGameComponent: React.FC = (props) => {
  const savedGames = useAppSelector(getSavedGames) as Array<SavedGame>;

  const savedGamesElements = useCallback(() => {
    if (savedGames.length === 0) {
      return (
        <NoGamesStyledDiv>
          <NoGamesStyledSpan>
            There are no games to display : (
          </NoGamesStyledSpan>
          <NoGamesBoldStyledSpan>
            Change the filter or add a new bet
          </NoGamesBoldStyledSpan>
        </NoGamesStyledDiv>
      );
    }

    return savedGames.map((game) => (
      <GameStyledDiv key={game.id} borderColor={game.betType.color}>
        <NumbersStyledSpan>{game.numbers.join(", ") + "."}</NumbersStyledSpan>
        <GameDatePriceRow>
          <DatePriceStyledSpan>
            {game.getCreatedAt()} - R${game.price.toFixed(2)}
          </DatePriceStyledSpan>
        </GameDatePriceRow>
        <NameGameStyledSpan fontColor={game.betType.color}>
          {game.betType.type}
        </NameGameStyledSpan>
      </GameStyledDiv>
    ));
  }, [savedGames])();

  return (
    <RecentGameStyledColumn>
      <BetPagination>{savedGamesElements}</BetPagination>
    </RecentGameStyledColumn>
  );
};

export default RecentGameComponent;

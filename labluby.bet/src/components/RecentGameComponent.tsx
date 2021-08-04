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

const RecentGameComponent: React.FC<{
  filter: string;
}> = (props) => {
  const savedGames = useAppSelector(getSavedGames) as Array<SavedGame>;

  const savedGamesElements = useCallback(() => {
    const filteredGames =
      props.filter !== ""
        ? savedGames.filter((games) => games.typeGame.type === props.filter)
        : savedGames;

    if (filteredGames.length === 0) {
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

    return filteredGames.map((game) => (
      <GameStyledDiv borderColor={game.typeGame.color}>
        <NumbersStyledSpan>
          {game.selectedNumbers.join(", ") + "."}
        </NumbersStyledSpan>
        <GameDatePriceRow>
          <DatePriceStyledSpan>
            {game.getCreatedAt()} - R${game.price.toFixed(2)}
          </DatePriceStyledSpan>
        </GameDatePriceRow>
        <NameGameStyledSpan fontColor={game.typeGame.color}>
          {game.typeGame.type}
        </NameGameStyledSpan>
      </GameStyledDiv>
    ));
  }, [props.filter, savedGames])();

  return <RecentGameStyledColumn>{savedGamesElements}</RecentGameStyledColumn>;
};

export default RecentGameComponent;

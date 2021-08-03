import {
  RecentGameStyledColumn,
  GameStyledDiv,
  NameGameStyledSpan,
  NumbersStyledSpan,
  PriceStyledSpan,
} from "../styles/recentGameComponent.style";
import { getSavedGames } from "../store/gamesSlice";
import { useAppSelector } from "../hooks/hooks";
import { useCallback } from "react";
import SavedGame from "../models/SavedGame";

const RecentGameComponent: React.FC<{
  filter: string;
}> = (props) => {
  const savedGames = useAppSelector(getSavedGames) as Array<SavedGame>;

  const savedGamesElements = useCallback(() => {
    return savedGames.map((game) => (
      <GameStyledDiv borderColor={game.typeGame.color}>
        <NumbersStyledSpan>
          {game.selectedNumbers.join(", ") + "."}
        </NumbersStyledSpan>
        <NameGameStyledSpan fontColor={game.typeGame.color}>
          {game.typeGame.type} <br />
        </NameGameStyledSpan>
        <PriceStyledSpan>{game.price.toFixed(2)}</PriceStyledSpan>
      </GameStyledDiv>
    ));
  }, [savedGames])();
  return <RecentGameStyledColumn>{savedGamesElements}</RecentGameStyledColumn>;
};

export default RecentGameComponent;

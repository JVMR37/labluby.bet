import { useCallback } from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  NewBetStyledTitle,
  GameStyledButton,
  NewBetContentStyledColumn,
  ChooseGameStyledSpan,
  TypeGameButtonStyledRow,
  DescriptionGameStyledSpan,
  DescriptionTitleStyledSpan,
  AddToCartStyledButton,
  GameActionStyledButton,
  GameActionsStyledRow,
  CartButtonStyledDiv,
} from "../styles/newBetComponent.style";

import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import {
  selectAvailableGames,
  getSelectedGame,
  selectGame,
} from "../store/gamesSlice";

const NewBetComponent: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const availableGames = useAppSelector(selectAvailableGames);
  const selectedGame = useAppSelector(getSelectedGame);

  const gameButtonHandler = useCallback(
    (event: any) => {
      console.log("========== Game Button Clicked ==========");
      const gameName = event.target.textContent;
      dispatch(selectGame(gameName));
    },
    [dispatch]
  );

  const gameButtons = useCallback(() => {
    return availableGames.map((game) => {
      return (
        <GameStyledButton
          key={game.type}
          isSelected={game === selectedGame}
          gameColor={game.color}
          onClick={gameButtonHandler}
        >
          {game.type}
        </GameStyledButton>
      );
    });
  }, [availableGames, selectedGame, gameButtonHandler])();

  return (
    <NewBetContentStyledColumn>
      <NewBetStyledTitle>
        New Bet
        <span>{" for game Lotofácil"}</span>
      </NewBetStyledTitle>

      <ChooseGameStyledSpan>Choose a game</ChooseGameStyledSpan>

      <TypeGameButtonStyledRow>{gameButtons} </TypeGameButtonStyledRow>

      <DescriptionTitleStyledSpan>Fill your bet</DescriptionTitleStyledSpan>
      <DescriptionGameStyledSpan>
        {selectedGame?.description}
      </DescriptionGameStyledSpan>

      <GameActionsStyledRow>
        <GameActionStyledButton isPrimary>Complete Game</GameActionStyledButton>
        <GameActionStyledButton isPrimary>Clear Game</GameActionStyledButton>
        <CartButtonStyledDiv>
          <AddToCartStyledButton isPrimary>
            <FaShoppingCart /> Add to cart
          </AddToCartStyledButton>
        </CartButtonStyledDiv>
      </GameActionsStyledRow>
    </NewBetContentStyledColumn>
  );
};

export default NewBetComponent;

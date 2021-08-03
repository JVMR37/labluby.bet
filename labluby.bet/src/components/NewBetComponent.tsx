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
import GameNumbersContainer from "./GameNumbersComponent";

import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import {
  selectAvailableGames,
  getSelectedGame,
  getSelectedNumbers,
  selectGame,
  clearSelectedNumbers,
  randomlySelectNumbers,
} from "../store/gamesSlice";

import { addItem } from "../store/cartSlice";
import SavedGame from "../models/SavedGame";

const NewBetComponent: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const availableGames = useAppSelector(selectAvailableGames);
  const selectedGame = useAppSelector(getSelectedGame);
  const selectedNumbers = useAppSelector(getSelectedNumbers);

  const gameButtonHandler = useCallback(
    (event: any) => {
      console.log("========== Game Button Clicked ==========");
      const gameName = event.target.textContent;
      dispatch(clearSelectedNumbers());
      dispatch(selectGame(gameName));
    },
    [dispatch]
  );

  const addToCartButtonHandler = useCallback(
    (event: any) => {
      console.log("========== Add To Cart Button Clicked ==========");

      dispatch(
        addItem(
          new SavedGame(selectedNumbers, selectedGame!, selectedGame!.price)
        )
      );
    },
    [dispatch, selectedGame, selectedNumbers]
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

      <GameNumbersContainer
        key={selectedGame!.type}
        numbersQuantity={selectedGame!.range}
        gameColor={selectedGame!.color}
      />

      <GameActionsStyledRow>
        <GameActionStyledButton
          key={"CompleteGameButton"}
          isPrimary
          onClick={() => dispatch(randomlySelectNumbers())}
        >
          Complete Game
        </GameActionStyledButton>
        <GameActionStyledButton
          key={"ClearGameButton"}
          isPrimary
          onClick={() => dispatch(clearSelectedNumbers())}
        >
          Clear Game
        </GameActionStyledButton>
        <CartButtonStyledDiv>
          <AddToCartStyledButton
            key={"AddToCartButton"}
            isPrimary
            onClick={addToCartButtonHandler}
          >
            <FaShoppingCart /> Add to cart
          </AddToCartStyledButton>
        </CartButtonStyledDiv>
      </GameActionsStyledRow>
    </NewBetContentStyledColumn>
  );
};

export default NewBetComponent;

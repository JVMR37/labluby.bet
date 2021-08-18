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
import { useMySwal } from "../hooks/use-swal";

import { appTheme } from "../utils/appTheme";

import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import {
  selectAvailableGames,
  getSelectedGame,
  getSelectedNumbers,
  selectGame,
  clearSelectedNumbers,
  randomlySelectNumbers,
} from "../store/gamesSlice";

import { ModalCloseStyledButton } from "../styles/modal.style";

import { addItem } from "../store/cartSlice";
import SavedGame from "../models/SavedGame";

const NewBetComponent: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const availableGames = useAppSelector(selectAvailableGames);
  const selectedGame = useAppSelector(getSelectedGame);
  const selectedNumbers = useAppSelector(getSelectedNumbers);
  const mySwal = useMySwal();

  const gameButtonHandler = useCallback(
    (event: any) => {
      console.log("========== Game Button Clicked ==========");
      const gameName = event.target.textContent;
      dispatch(clearSelectedNumbers());
      dispatch(selectGame(gameName));
    },
    [dispatch]
  );

  const completeGameButtonHandler = useCallback(
    (event: any) => {
      console.log("========== Complete Button Clicked ==========");
      const hasNumberAvailable =
        selectedGame!.maxNumber - selectedNumbers.length;

      if (hasNumberAvailable) {
        dispatch(randomlySelectNumbers());
      } else {
        dispatch(clearSelectedNumbers());
        dispatch(randomlySelectNumbers());
      }
    },
    [dispatch, selectedGame, selectedNumbers.length]
  );

  const addToCartButtonHandler = useCallback(
    (event: any) => {
      console.log("========== Add To Cart Button Clicked ==========");
      const availableNumbersCount =
        selectedGame!.maxNumber - selectedNumbers.length;

      console.log(availableNumbersCount);

      if (availableNumbersCount > 0) {
        mySwal.fire({
          title: "There are still numbers available to choose from!",
          text: `Add ${availableNumbersCount} more numbers before adding the game to your cart.`,
          icon: "warning",
          background: appTheme.colors.background,
          footer: (
            <ModalCloseStyledButton
              color={appTheme.colors.main}
              backgroundColor={appTheme.colors.background}
              onClick={mySwal.clickConfirm}
            >
              Back
            </ModalCloseStyledButton>
          ),
          showConfirmButton: false,
        });
        return;
      }

      dispatch(
        addItem(
          new SavedGame(selectedNumbers, selectedGame!, selectedGame!.price)
        )
      );
      dispatch(clearSelectedNumbers());
    },
    [dispatch, mySwal, selectedGame, selectedNumbers]
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
        <span>{" for " + selectedGame!.type}</span>
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
          onClick={completeGameButtonHandler}
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

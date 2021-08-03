import React from "react";
import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import {
  selectNumber,
  getSelectedNumbers,
  removeNumber,
} from "../store/gamesSlice";
import {
  GameNumbersStyledContainer,
  GameNumberButton,
} from "../styles/gameNumbers.style";

const GameNumbersContainer: React.FC<{
  numbersQuantity: number;
  gameColor: string;
}> = (props) => {
  const selectedNumbers = useAppSelector(getSelectedNumbers);
  const dispatch = useAppDispatch();

  const gameButtonHandler = useCallback(
    (event: any) => {
      console.log("========== Number Button Clicked ==========");
      console.log(typeof event);
      const clickedNumber = Number(event.target.textContent);
      if (selectedNumbers.some((number) => number === clickedNumber)) {
        dispatch(removeNumber(clickedNumber));
      } else {
        dispatch(selectNumber(clickedNumber));
      }
    },
    [dispatch, selectedNumbers]
  );

  const gameNumbers = useCallback(() => {
    const numbersElementArray = [];
    for (let i = 1; i <= props.numbersQuantity; i++) {
      const needsMoreMargin = i % 3 === 0;
      numbersElementArray.push(
        <GameNumberButton
          key={i}
          needsMoreMargin={needsMoreMargin}
          gameColor={props.gameColor}
          onClick={gameButtonHandler}
          isSelected={selectedNumbers.some(
            (selectedNumber) => i === selectedNumber
          )}
        >
          {i}
        </GameNumberButton>
      );
    }
    return numbersElementArray;
  }, [
    props.numbersQuantity,
    props.gameColor,
    gameButtonHandler,
    selectedNumbers,
  ])();

  return <GameNumbersStyledContainer>{gameNumbers}</GameNumbersStyledContainer>;
};

export default GameNumbersContainer;

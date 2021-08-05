import React from "react";
import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import {
  selectNumber,
  getSelectedNumbers,
  getSelectedGame,
  removeNumber,
} from "../store/gamesSlice";
import {
  GameNumbersStyledContainer,
  GameNumberButton,
} from "../styles/gameNumbers.style";

import { useMySwal } from "../hooks/use-swal";
import { ModalCloseStyledButton } from "../styles/modal.style";
import { appTheme } from "../utils/appTheme";

const GameNumbersContainer: React.FC<{
  numbersQuantity: number;
  gameColor: string;
}> = (props) => {
  const selectedNumbers = useAppSelector(getSelectedNumbers);
  const selectedSelected = useAppSelector(getSelectedGame);

  const dispatch = useAppDispatch();
  const mySwal = useMySwal();

  const gameButtonHandler = useCallback(
    (event: any) => {
      const clickedNumber = Number(event.target.textContent);
      if (selectedNumbers.some((number) => number === clickedNumber)) {
        dispatch(removeNumber(clickedNumber));
      } else if (selectedNumbers.length === selectedSelected!.maxNumber) {
        mySwal.fire({
          title:
            "You have already selected the maximum number allowed for this game!",
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

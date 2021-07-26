import Game from "./Game";

export default class CartItem {
  id: number;
  selectedNumbers: Array<string>;
  typeGame: Game;
  price: number;

  constructor(selectedNumbers: Array<string>, typeGame: Game, price: number) {
    this.id = Date.now();
    this.selectedNumbers = selectedNumbers;
    this.typeGame = typeGame;
    this.price = price;
  }
}

import Game from "./Game";

export default class SavedGame {
  id: number;
  selectedNumbers: Array<number>;
  typeGame: Game;
  createdAt: Date;
  price: number;

  constructor(selectedNumbers: Array<number>, typeGame: Game, price: number) {
    this.id = Date.now();
    this.createdAt = new Date();
    this.selectedNumbers = selectedNumbers;
    this.typeGame = typeGame;
    this.price = price;
  }

  getCreatedAt(): String {
    const dd = String(this.createdAt.getUTCDate()).padStart(2, "0");
    const mm = String(this.createdAt.getUTCMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = this.createdAt.getUTCFullYear();
    return mm + "/" + dd + "/" + yyyy;
  }
}

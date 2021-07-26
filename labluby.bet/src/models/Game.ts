export default class Game {
  type: string;
  description: string;
  range: number;
  price: number;
  maxNumber: number;
  color: string;
  minCartValue: number;

  constructor(
    type: string,
    description: string,
    range: number,
    price: number,
    maxNumber: number,
    color: string,
    minCartValue: number
  ) {
    this.type = type;
    this.description = description;
    this.range = range;
    this.price = price;
    this.maxNumber = maxNumber;
    this.color = color;
    this.minCartValue = minCartValue;
  }
}

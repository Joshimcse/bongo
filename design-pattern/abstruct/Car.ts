import Vehicle from "./Vehicle";

export default class Car extends Vehicle {
  constructor(amountOfGas: number) {
    super(amountOfGas);
  }

  hasGas(): boolean {
    return this.amountOfGas > 0;
  }
}
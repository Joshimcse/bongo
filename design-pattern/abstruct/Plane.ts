import Vehicle from "./Vehicle";

export default class Plane extends Vehicle {
  constructor(amountOfGas: number) {
    super(amountOfGas);
  }

  hasGas(): boolean {
    return this.amountOfGas > 0;
  }
}

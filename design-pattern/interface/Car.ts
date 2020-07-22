import Vehicle from "./Vehicle";

export default class Car implements Vehicle {
  private numOfWheels: number;
  private numOfPassengers: number;
  private amountOfGas: number;

  constructor(amountOfGas: number) {
    this.amountOfGas = amountOfGas;
  }

  setNumOfWheels(wheels: number): number {
    this.numOfWheels = wheels;
    return this.numOfWheels;
  }

  setNumOfPassengers(passengers: number): number {
    this.numOfPassengers = passengers;
    return this.numOfPassengers;
  }

  hasGas(): boolean {
    return this.amountOfGas > 0;
  }
}

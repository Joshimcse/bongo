export default abstract class Vehicle {
  private numOfWheels: number;
  private numOfPassengers: number;
  public amountOfGas: number;

  constructor(amountOfGas: number) {
    this.amountOfGas = amountOfGas;
  }

  // Setter Methods
  setNumOfWheels(wheels: number): void {
    this.numOfWheels = wheels;
  }

  setNumOfPassengers(passengers: number): void {
    this.numOfPassengers = passengers;
  }

  // Getter Methods
  getNumOfWheels(): number {
    return this.numOfWheels;
  }

  getNumOfPassengers(): number {
    return this.numOfPassengers;
  }

  abstract hasGas(): boolean;
}

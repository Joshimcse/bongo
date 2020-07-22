/**
 * identifier name defined using TS/JS naming convension rules
 * for Improves code readability.
 */
export default interface Vehicle {
  setNumOfWheels(wheels: number): number;
  setNumOfPassengers(passengers: number): number;
  hasGas(): boolean;
}
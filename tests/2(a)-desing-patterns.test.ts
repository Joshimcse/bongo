import { assert } from "chai";
import Car from "../design-pattern/interface/Car";
import Plane from "../design-pattern/interface/Plane";

/**
 * @test :: Unit testing for Q.2(a)
 * @passingData ::
 *
 * expected case - 1: Car: should return true when execute car.hasGas
 * expected case - 2: Car: should return 4 when execute car.setNumOfWheels
 * expected case - 3: Car: should return 8 when execute car.setNumOfPassengers
 * expected case - 4: Plane: should return false when execute plane.hasGas
 * expected case - 5: Plane: should return 3 when execute plane.setNumOfWheels
 * expected case - 6: Plane: should return 67 when execute plane.setNumOfPassengers
 */

describe("Unit testing for Q.2(a): Interface", () => {
  const car = new Car(0);
  const plane = new Plane(120);

  it("Car: should return false when execute car.hasGas", (done) => {
    assert.equal(car.hasGas(), false);
    done();
  });
  it("Car: should return 4 when execute car.setNumOfWheels", (done) => {
    assert.equal(car.setNumOfWheels(4), 4);
    done();
  });
  it("Car: should return 8 when execute car.setNumOfPassengers", (done) => {
    assert.equal(car.setNumOfPassengers(8), 8);
    done();
  });
  it("Plane: should return true when execute plane.hasGas", (done) => {
    assert.equal(plane.hasGas(), true);
    done();
  });
  it("Plane: should return 3 when execute plane.setNumOfWheels", (done) => {
    assert.equal(plane.setNumOfWheels(3), 3);
    done();
  });
  it("Plane: should return 67 when execute plane.setNumOfPassengers", (done) => {
    assert.equal(plane.setNumOfPassengers(67), 67);
    done();
  });
});

import { assert } from "chai";

import Car from "../design-pattern/abstruct/Car";
import Plane from "../design-pattern/abstruct/Plane";

/**
 * @test :: Unit testing for Q.2(b)
 * @passingData ::
 *
 * expected case - 1: Car: should return 4 when execute car.getNumOfWheels
 * expected case - 2: Car: should return 12 when execute car.getNumOfPassengers
 * expected case - 3: Car: should return true when execute car.hasGas
 * expected case - 4: Plane: should return 3 when execute plane.getNumOfWheels
 * expected case - 5: Plane: should return 56 when execute plane.getNumOfPassengers
 * expected case - 6: Plane: should return false when execute plane.hasGas
 */

describe("Unit testing for Q.2(b): Abstruct Factory", () => {
  const car = new Car(50);
  const plane = new Plane(0);

  it("Car: should return 4 when execute car.getNumOfWheels", (done) => {
    car.setNumOfWheels(4);
    assert.equal(car.getNumOfWheels(), 4);
    done();
  });

  it("Car: should return 12 when execute car.getNumOfPassengers", (done) => {
    car.setNumOfPassengers(12);
    assert.equal(car.getNumOfPassengers(), 12);
    done();
  });

  it("Car: should return true when execute car.hasGas", (done) => {
    assert.equal(car.hasGas(), true);
    done();
  });

  it("Plane: should return 3 when execute plane.getNumOfWheels", (done) => {
    plane.setNumOfWheels(3);
    assert.equal(plane.getNumOfWheels(), 3);
    done();
  });

  it("Plane: should return 56 when execute plane.getNumOfPassengers", (done) => {
    plane.setNumOfPassengers(56);
    assert.equal(plane.getNumOfPassengers(), 56);
    done();
  });

  it("Plane: should return false when execute plane.hasGas", (done) => {
    assert.equal(plane.hasGas(), false);
    done();
  });
});

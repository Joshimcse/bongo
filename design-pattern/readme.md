### Problem 2: Explain the design pattern used in following:
```Java
interface Vehicle {
  int set_num_of_wheels()
  int set_num_of_passengers()
  boolean has_gas()
}
```
> N.B: In this example shows an interface, Interfaces are unrelated to Design Patterns. It's the part of the Object Orientation Programming. But in this case some people call as `Interface Pattern.` <br> Interface can also be used in a design pattern however, such as the `Abstract Factory`, `Builder`, or `Adapter Pattern` etc. <br> <br>
If you notice in a better way, you will see that the `Getter and Setter` techniques has been used here. `Getter and Setter` are a good programming practise in OOP as they prevent accidental manipulation of the fields of a class.

<br>

### a) Explain how can you use the pattern to create car and plane class ?

> In TypeScript or other similar programming language create a new class with implement Interface need to using `implements` keyword. for example, `class ClassName implements InterfaceName { /** Class Body Here */ }`

``` Typescript
/***
 * fileName: Vehicle.ts
 * 
 * In this example identifier name defined using TS/JS naming convension rules
 * for Improves code readability.
 */

interface Vehicle {
  setNumOfWheels(wheels: number): number;
  setNumOfPassengers(passengers: number): number;
  hasGas(): boolean;
}
```

```Typescript
/**
 * fileName: Car.ts
 */

class Car implements Vehicle {
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
```

```Typescript
/**
 * fileName: Plane.ts
 */

class Plane implements Vehicle {
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
```
<br>

### b) Use a different design pattern for this solution.

> In this case I'm using `Abstract Factory` design pattern for this solution. I guess it's also work as same.

``` Typescript
/***
 * fileName: Vehicle.ts
 * 
 * In this example identifier name defined using TS/JS naming convension rules
 * for Improves code readability.
 */

abstract class Vehicle {
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
```

```Typescript
/**
 * fileName: Car.ts
 */

class Car extends Vehicle {
  constructor(amountOfGas: number) {
    super(amountOfGas);
  }

  hasGas(): boolean {
    return this.amountOfGas > 0;
  }
}
```

```Typescript
/**
 * fileName: Plane.ts
 */

class Plane extends Vehicle {
  constructor(amountOfGas: number) {
    super(amountOfGas);
  }

  hasGas(): boolean {
    return this.amountOfGas > 0;
  }
}
```
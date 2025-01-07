class Car {
  brand;
  model;
  speed = 0;
  isTrunkOpen = true;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }

  displayInfo() {
    console.log(
      `${this.brand} | ${this.model} | ${this.speed} ${this.isTrunkOpen}`
    );
  }

  go() {
    if (this.isTrunkOpen) {
      if (this.speed >= 0 && this.speed <= 200) this.speed += 5;
    }
  }
  break() {
    if (this.speed >= 0 && this.speed <= 200) this.speed -= 5;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }
  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }
  go() {
    if (this.isTrunkOpen) {
      if (this.speed >= 0 && this.speed <= 300) {
        this.speed += this.acceleration;
      }
    }
  }
  displayInfo() {
    console.log(
      `${this.brand} | ${this.model} | ${this.speed} | ${this.acceleration}`
    );
  }
}

const car1 = new Car({
  brand: "Toyota",
  model: "Corolla",
});

const car2 = new Car({
  brand: "Tesla",
  model: "Model 3",
});

const raceCar = new RaceCar({
  brand: "McLaren",
  model: "F1",
  acceleration: 20,
});

car1.go();
car2.go();
raceCar.go();
raceCar.go();
car1.displayInfo();
car2.displayInfo();
raceCar.displayInfo();

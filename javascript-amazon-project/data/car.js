class Car {
  brand;
  model;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }
}

const car1 = new Car({
  brand: "Toyota",
  model: "Corolla",
});

console.log(car1.brand);
class Vehicle {
  // color: string = 'red';
  
  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(private color: string) {}

  public drive(): void {
    console.log('chuaug chuaga');
    console.log(this.color)
  }

  public honc(): void {
    console.log('beep')
  }
}

class SuperCar extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
  }
  public drive(): void {
    console.log('broom'); // override
  }

  startDrivingProcess(): void {
    this.drive();
    this.honc(); // fail why this is private , so change protected
  }
}

const vehicle = new Vehicle('orange');
vehicle.drive();
// const car = new Car();
// car.drive();
// car.honc();
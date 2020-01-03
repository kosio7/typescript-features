import VehicleAbstract from './VehicleAbstract';

class Vehicle {
  drive(): void {
    console.log('Wohoooooo!');
  }
  beep(): void {
    console.log('Beeeeep!');
  }
  stop(): void {
    console.log('STOP');
  }
}

// Using the Vehicle class
// NOTE: Cannot create new instance if it is an abstract class
const vehicle = new Vehicle();

vehicle.drive();
vehicle.beep();
vehicle.stop();

// Extending the 'normal' Vehicle class does not require
// implementing any of it's methods.
class Car extends Vehicle {}

const extendedVehicle = new Car();

extendedVehicle.drive();
extendedVehicle.beep();

// Can extend the abstract class and create a new instance of CarExtendingAbstract.
class CarExtendingAbstract extends VehicleAbstract {
  // The abstract class contains an abstract method which must be implemented.
  stop(): void {
    console.log('Implemented the abstract method from VehicleAbstract.');
  }
}

// Using the CarExtendingAbstract class which extends the abstract class VehicleAbstract
const carAbstract = new CarExtendingAbstract();

carAbstract.drive();
carAbstract.beep();
carAbstract.stop();

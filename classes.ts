import VehicleAbstract from './VehicleAbstract';

class Vehicle {
  public drive(): void {
    console.log('Wohoooooo!');
  }
  public beep(): void {
    console.log('Beeeeep!');
  }
  public stop(): void {
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
  public stop(): void {
    console.log('Implemented the abstract method from VehicleAbstract.');
  }

  // Calling the protected method steerProtected from the parent
  // class VehicleAbstract
  public protectedSteer(): void {
    this.steerProtected();
  }
}

// Using the CarExtendingAbstract class which extends the abstract class VehicleAbstract
const carAbstract = new CarExtendingAbstract();

carAbstract.protectedSteer();
carAbstract.drivePrivatePublic();
carAbstract.beep();
carAbstract.stop();

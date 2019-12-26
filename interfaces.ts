interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printVehicle = (
  vehicle: // Really long type anotations. Also if we have to use oldCivic for multiple functions
  // we need to rewrite the same long anotations multiple times.
  // We can avoid this by creating and using an interface.
  // {
  // name: string;
  // year: number;
  // broken: boolean;
  // }

  // Using the Vehicle interface instead of the above type declarations.
  Vehicle
): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);

  // After implementing the vehicle summary() function
  // we can simply call it like that.
  console.log(vehicle.summary());
};

printVehicle(oldCivic);

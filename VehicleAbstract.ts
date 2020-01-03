export default abstract class VehicleAbstract {
  drive(): void {
    console.log('Wohoooooo from the abstract one!');
  }
  beep(): void {
    console.log('Beeeeep from the abstract one!');
  }

  // Abstract methods must be implemented in the derived
  // classes, otherwise it won't work and an error will be thrown.
  // Example:  Non-abstract class 'CarExtendingAbstract'
  // does not implement inherited abstract member 'stop' from class 'VehicleAbstract'
  abstract stop(): void;
}

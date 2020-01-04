export abstract class VehicleAbstract {
  public drive(): void {
    console.log('Wohoooooo from the abstract one!');
  }
  public beep(): void {
    console.log('Beeeeep from the abstract one!');
  }

  // Private methods can only be called by other
  // methods inside this class.
  private drivePrivate(): void {
    console.log('Wohooo driving from private method!');
  }

  // Calling the private method drivePrivate inside a public one.
  // This now can be called everywhere.
  public drivePrivatePublic(): void {
    this.drivePrivate();
  }

  // Protected methods can be called by other methods in this class
  // or by other methods in child classes.
  protected steerProtected(): void {
    console.log('Takin the tuuuurn (protected)');
  }

  // Abstract methods must be implemented in the derived
  // classes, otherwise it won't work and an error will be thrown.
  // Example:  Non-abstract class 'CarExtendingAbstract'
  // does not implement inherited abstract member 'stop' from class 'VehicleAbstract'
  abstract stop(): void;
}

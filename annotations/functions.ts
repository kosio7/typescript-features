// Annotation functions
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

// Function that doesn't return anything has a void type
const logger = (message: string): void => {
  console.log(message);
};

// Function that's never going to execute to the end and return anything
// it will stop at some point and throw an error has a never type.
// Really rare case and done only when it is expected the function
// to return nothing.
const throwError = (message: string): never => {
  throw new Error(message);
};

// The above function as how it most commonly may be used.
const logMessage = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

// Annotating object properties
const forecast = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// Destructuring
const logWeatherDestrParams = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

// TS arrays containing only the specified types
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Functions
let logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1. When a function returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2. When we declare a variable and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] == 'green') {
    foundWord = true;
  }
}

// 3. Variables whose type cannot be inferred correctly
let newNumbers = [-10, -12, 15];
let positive: boolean | number = false;

for (let i = 0; i < newNumbers.length; i++) {
  if (newNumbers[i] > 0) {
    positive = newNumbers[i];
  }
}

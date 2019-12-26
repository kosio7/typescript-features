const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Create new type alias for our tuple
type Drink = [string, boolean, number];

// Tuple
const pepsi: Drink = ['brown', true, 40];
const tea: Drink = ['brown', false, 0];

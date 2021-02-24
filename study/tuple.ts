const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// array expression
const pepsi = ['brown', true, 40];
pepsi[0] = 40 //avaliable

// tuple
const coka: [string, boolean, number] = ['brown', true, 40];
// inavaliable coka[0] = 40

type Drink = [string, boolean, number];

const zero: Drink = ['brown', true, 40];

const apples = 5;
const banaana:number = 5;
let now: Date = new Date()
let noting: undefined = undefined;
let nothingMuch: null = null;

// Array

let colors: string[] = ['red', 'green']
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false]

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 123,
  y: 20
};

// Function
const logNumber: (i: number) => string = (i: number) => {
  console.log(i);
  return '3'
}
logNumber(3)

//Whento use annotations
const json = '{"x": 10}'
const coordinates = JSON.parse(json);
console.log(coordinates)

// 2) When we declarea variable on one line

let words = ['red', 'green'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] == 'green') {
    foundWord = true;
  }
}
class Do {

}
//3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, new Do()];
// let numberAboveZero = false; 이렇게하면 type inference에 의해 알아서 false가됨
// let numberAboveZero: boolean | number = false;
// let numberAboveZero: typeof point = new Car();
// for (let i = 0; i< numbers.length; i++) {
//   numberAboveZero = numbers[i];
//   console.log(numbers[i])
// }
console.log(numberAboveZero)
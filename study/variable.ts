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
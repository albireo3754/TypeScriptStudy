const add = (a: number, b: number): number => {
  return a + b;
};

const sub = (a: number, b: number) => {
  a - b;
}

function divide(a: number, b: number): number {
  return a/b;
};

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): never=> {
  console.log(message);
  throw new Error(message);
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// const logWeather = ( {date, weather}: { date: Date, weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

// // es6
// const logWeather = ( {date, weather} )

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
}

const { age }: { age: number } = profile;
const { coords: { lat, lng } }: { coords : { lat: number; lng: number } } = profile;
// logWeather(todaysWeather);

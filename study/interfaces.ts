interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}
interface Reportable {
  summary(): string;
}
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
  // isbroken: true
}

// const printVehicle = (vehicle: { name: string; year: number; broken: true }) : void => {
//   console.log(vehicle.name, vehicle.year, vehicle.broken)
// }
const printVehicle = (vehicle: Vehicle) : void => {
  console.log(vehicle.name, vehicle.year, vehicle.broken)
}

const printSummary = (item: Reportable) : void => {
  console.log(item.summary());
}


const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} gram`
  }
}

printVehicle(oldCivic)
printSummary(oldCivic)
printSummary(drink)
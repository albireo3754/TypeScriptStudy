import faker from 'faker';
import { Mappable } from './CustomMap';


export class User implements Mappable {
  name: string;
  sex: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    // this.location.lat = 12; // 1. object 초기화를 안해주면 안됨
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}

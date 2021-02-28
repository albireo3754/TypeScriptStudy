import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollecion } from './CharactersCollecion';
const numbersCollection = new NumbersCollection([15, -3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
const character = new CharactersCollecion('aaCaxaX');
const sorter2 = new Sorter(character);
sorter2.sort();
console.log(sorter2.collection)
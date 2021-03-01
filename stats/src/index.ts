import fs from 'fs';
import { stringify } from 'node:querystring';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
}).split('\n').map((row: string): string[] => {
  return row.split(',')
});
console.log(matches);

let manUnitedWins = 0

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man united' && match[5] === 'W') {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins}`)
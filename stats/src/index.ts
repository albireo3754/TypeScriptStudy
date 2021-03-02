import { CsvFileReader } from './CsvFileReader';
import { stringify } from 'node:querystring';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

let manUnitedWins = 0

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man united' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(reader.data)
console.log(`Man United won ${manUnitedWins}`)
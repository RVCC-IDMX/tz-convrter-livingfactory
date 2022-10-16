const yargs = require('yargs');
const moment = require('moment-timezone');

const command = yargs.argv._[0];

moment.tz.setDefault('America/New_York');
let targetTimezone = 'Europe/Paris';

if (process.argv.length !== 3) {
  console.log('Usage: node <script-file> <timezone>');
  process.exit(1);
} else {
  // eslint-disable-next-line prefer-destructuring
  targetTimezone = command;
}

console.log(`The time in the ${targetTimezone} timezone is currently ${moment().tz(targetTimezone)}`);

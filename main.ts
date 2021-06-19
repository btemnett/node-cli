import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { calculateValueHandler } from './handlers/calculateValueHandler'

yargs(hideBin(process.argv))
  .command(
    'calculate-value',
    'calulate the current value with the given parameters',
    calculateValueHandler)
  .option('value', {
    alias: 'v',
    describe: 'The current coin value'
  })
  .option('holding(million)', {
    alias: 'h',
    describe: 'The amount you are holding in millions'
  })
  .demandCommand(1)
  .argv

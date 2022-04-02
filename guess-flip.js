import { flipACoin } from "./modules/coin.mjs";
import min from 'minimist'

let args = min(process.argv.slice(2))

if (args['call'] == 'heads'){
    console.log(flipACoin('heads'))
} else if (args['call'] == 'tails'){
    console.log(flipACoin('tails'))
} else {
    console.log('Error: no input. \nUsage: node guess-flip --call=[heads|tails]')
}
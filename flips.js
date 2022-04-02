import {coinFlips, countFlips} from './modules/coin.mjs'
import min from 'minimist'

let args = min(process.argv.slice(2))

if (args['number']){
    let flips = coinFlips(args['number'])
    console.log(flips)
    console.log(countFlips(flips))
} else{
    let flips = coinFlips(1)
    console.log(flips)
    console.log(countFlips(flips))
}
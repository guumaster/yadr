'use strict'

const yadr = require(  '../lib/yadr' )

let roller = yadr()
  .roll('5d6')
  //.takeWorst(4)
  .takeBest(3)
  .plus(1)
  //.minus(1)
  .make(function(result) {
    console.log(`${result.input}: rolled [${result.rolls}] ${result.taken?`taking [${result.taken}]`: ''} ${result.mod?`${result.sign}${result.mod}`: ''} = ${result.total}`)
    return result.total
  })

console.log('new char: ', {
  str: roller(),
  dex: roller(),
  int: roller(),
  wiz: roller(),
  chr: roller()
})

yadr({debug:true})
  .roll('2d20')
  //.takeWorst(4)
  .takeBest()
  .plus(1)
  //.minus(1)
  .run(function(result) {
    console.log(`${result.input}: rolled [${result.rolls}] ${result.taken?`taking [${result.taken}]`: ''} ${result.mod?`${result.sign}${result.mod}`: ''} = ${result.total}`)
    return result.total
  })

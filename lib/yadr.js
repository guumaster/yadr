'use strict'

const parser = require('./parser')
const { composeAll, isFunction, isString } = require('./helpers')
const { dice, down, up, range, id, rnd, sum, take } = require('./helpers')

module.exports = ({ debug=false } = {}) => {
  let start = {
    mod: 0,
    sign: '+',
    sides: '',
    dices: '',
    take: 0,
    type: undefined,
    rolls: [],
    result: {},
    debug
  }

  return Object.assign(Object.create(Roller), start)
}

let Roller = {
  roll(str) {
    Object.assign(this, parser(str))
    return this
  },
  then() {
    return this
  },
  takeBest(x=1) {
    this.take = x
    this.type = 'best'
    return this
  },
  takeWorst(x=1) {
    this.take = x
    this.type = 'worst'
    return this
  },
  minus(x) {
    this.mod -=x
    this.sign = this.mod<=0?'-':'+'
    return this
  },
  plus(x) {
    this.mod +=x
    this.sign = this.mod<=0?'-':'+'
    return this
  },
  run(fn) {
    return this.make(fn)()
  },
  make(fn) {
    let self = this
    let final = composeRoll(this)

    return input => {
      if (isString(input)) {
        self.roll(input)
        final = composeRoll(self)
      }
      let result = final()
      return isFunction(fn)?fn(result):result.total
    }
  }
}

let composeRoll = obj => {
  // return a composed function
  return composeAll([
    // modder
    adder(obj),
    // taker
    taker(obj),
    // roller
    roller(obj)
  ])
}

let roller = info => {
  return () => {
    info.debug && console.log(`rolling ${info.dices}d${info.sides}`)
    info.rolls = range(Number(info.dices)).map(dice(info.sides))
    return info.rolls
  }
}

let taker = info => {
  if (!info.take) return id

  return rolls => {
    info.debug && console.log(`taking ${info.take} ${info.type} from ${rolls}`)
    info.taken = take(info.take,Array.from(rolls).sort(info.type === 'best' ?down:up))
    return info.taken
  }
}

let adder = info => {
  return rolls => {
    if(info.mod) {
      info.debug && console.log(`${info.mod<0?'sub':'add'} ${info.mod}`)
    }
    info.total =  sum(rolls) + info.mod
    return info
  }
}

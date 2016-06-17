'use strict'

const composeAll = fns => fns.reduce( (f, g) => (...args) => f(g(...args)) )
const isFunction = value => typeof value === 'function'
const isString = value => typeof value === 'string'
const range = total => Array.from(Array(Number(total)).keys())
const take = (x, arr) => arr.slice(0, x)
const id = x => x
const sum = x =>  x.reduce((a,b) => a+b, 0)
const rnd = top => Math.round((Math.random()*(top-1))) + 1
const dice = x => () => rnd(x)
const up = (a,b) => a-b
const down = (a,b) => b-a

module.exports = { composeAll, isFunction, isString, range, take, id, sum, rnd, dice, up, down }

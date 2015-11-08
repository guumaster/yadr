'use strict';

import parser from './parser';
import { composeAll, isFunction, isString } from './helpers';
import { dice, down, up, range, id, rnd, sum, take } from './helpers';

export default function yadr({ debug=false } = {}) {
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
  };

  return Object.assign(Object.create(Roller), start);
}

let Roller = {
  roll: function(str) {
    Object.assign(this, parser(str));
    return this;
  },
  then: function() {
    return this;
  },
  takeBest: function(x=1) {
    this.take = x;
    this.type = 'best';
    return this;
  },
  takeWorst: function(x=1) {
    this.take = x;
    this.type = 'worst';
    return this;
  },
  minus: function(x) {
    this.mod -=x;
    this.sign = this.mod<=0?'-':'+';
    return this;
  },
  plus: function(x) {
    this.mod +=x;
    this.sign = this.mod<=0?'-':'+';
    return this;
  },
  run: function(fn) {
    return this.make(fn)();
  },
  make: function(fn) {
    let self = this;
    let final = composeRoll(this);

    return (input) => {
      if (isString(input)) {
        self.roll(input);
        final = composeRoll(self);
      }
      let result = final();
      return isFunction(fn)?fn(result):result.total;
    }
  }
};

let composeRoll =  (obj) => {
  // return a composed function
  return composeAll([
    // modder
    adder(obj),
    // taker
    taker(obj),
    // roller
    roller(obj)
  ]);
};

let roller = (info) => {
  return () => {
    info.debug && console.log(`rolling ${info.dices}d${info.sides}`);
    info.rolls = range(Number(info.dices)).map(dice(info.sides));
    return info.rolls;
  }
};

let taker = (info) => {
  if (!info.take) return id;

  return (rolls) => {
    info.debug && console.log(`taking ${info.take} ${info.type} from ${rolls}`);
    info.taken = take(info.take,Array.from(rolls).sort(info.type === 'best' ?down:up));
    return info.taken;
  };
};

let adder = (info) => {
  return (rolls) => {
    if(info.mod) {
      info.debug && console.log(`${info.mod<0?'sub':'add'} ${info.mod}`);
    }
    info.total =  sum(rolls) + info.mod;
    return info;
  }
};

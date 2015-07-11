import { roll } from './roll';
import { makeDice } from './helpers';
import { parser, format } from './parser';
import { best, worst, plus, minus } from './mods';

if (!Array.from) {
  require('babel/polyfill');
}

let roller = (str, formatted=true) => {
  let info = parser(str);
  let dice = makeDice(info.sides);
  let r = roll(info.dices, dice);

  if (info.type === 'best') {
    r = best(info.take, r);
  } else if(info.type === 'worst') {
    r = worst(info.take, r);
  }

  if(info.sign === '+') {
    r = plus(info.mod, r);
  } else if( info.sign ==='-') {
    r = minus(info.mod, r);
  }

  return formatted ? format(r) : r;
};

export { roller };

import { clone, label, sum } from './helpers';

let plus = (extra,roll) => {
  roll = clone(roll);
  roll.plus = (roll.plus||0)+extra;
  roll.label =  label(roll);
  roll.total = total(roll)+roll.plus;
  return roll;
};

let total = (roll) => sum(roll.best ? roll.best : ( roll.worst ? roll.worst : roll.roll) );

let minus = (extra,roll) => {
  roll = clone(roll);
  roll.plus = (roll.plus||0) + extra;
  roll.label = label(roll, '-');
  roll.total = total(roll)+roll.plus;
  return roll;
};

let best = (total, roll) => {

  if (Number(total) >= roll.roll.length) return roll;

  let [best,rest]= split(total, roll, true);
  roll = clone(roll);
  roll.best = best;

  roll.total = roll.total - sum(rest);

  return roll;
};

let worst = (total, roll) => {

  if (Number(total) >= roll.roll.length) return roll;

  roll = clone(roll);
  let [rest,best]= split(total, roll);
  roll.worst = rest;
  roll.total = roll.total - sum(best);

  return roll;
};
let sortAsc = (a,b) => a-b;
let sortDes = (a,b) => b-a;

let split = (total, roll, reverse=false) => {
  let sorted = Array.from(roll.roll).sort(reverse?sortDes:sortAsc);
  return [Array.from(sorted).slice(0,total), Array.from(sorted).slice(total)];
};

export { plus, minus, best, worst };

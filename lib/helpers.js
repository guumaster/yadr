
let sum = x =>  x.reduce((a,b) => a+b, 0);

let range = total => Array.from(Array(Number(total)).keys());

let rnd = top => Math.round((Math.random()*(top-1))) + 1;

let clone = obj => Object.assign({}, obj);


let makeDice = x => {
  let fn = () => rnd(x);
  fn._name = `d${x}`;
  return fn;
};

let label = (roll) => {
  roll.label = roll.label.split(/([\+-])/)[0];

  if (!roll.plus) {
    return roll.label;
  }
  let sign = roll.plus > 0 ? '+' : '-';
  return `${roll.label}${sign}${Math.abs(roll.plus)}`;
};

export {
  clone, sum, range, label, makeDice
  };

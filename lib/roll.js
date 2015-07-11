import { range, sum } from './helpers';

let roll = (total, dices) => {
  let rolled = range(Number(total)).map(dices);
  return {
    roll:rolled,
    label: `${total}${dices._name}`,
    total: sum(rolled)
  }
};

export { roll };

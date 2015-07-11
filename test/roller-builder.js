import { roll, plus,  minus, best, worst, dices, format as show } from '../lib/builder';
let { d3, d4, d6, d8, d10, d20, d100 } = dices;

let x = roll(2,d100);

console.log(show(best(1, x)));
console.log(show(minus(3, worst(1, x))));

//console.log(show(plus(4, plus(1, best(3, x)))));
//console.log(show(roll(2, d100)));
//console.log(show(best(1, roll(2, d100))));

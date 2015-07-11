import { makeDice } from './helpers';

let d3 = makeDice(3);
let d4 = makeDice(4);
let d6 = makeDice(6);
let d8 = makeDice(8);
let d10 = makeDice(10);
let d12 = makeDice(10);
let d20 = makeDice(20);
let d100 = makeDice(100);

export { d3, d4, d6, d8, d10, d12, d20, d100 };

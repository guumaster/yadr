import yadr from '../lib/yadr';

const roller = yadr()
  .make(function(result) {
    console.log(`${result.input}: rolled [${result.rolls}] ${result.taken?`taking [${result.taken}]`: ''} ${result.mod?`${result.mod>=0?'+':''}${result.mod}`: ''} = ${result.total}`);
    return result.total;
  });

console.log(roller('4d6-1+3'));
console.log(roller('worst 1 of 3d6+1'));
console.log(roller('best 2 of 3d8+1'));
console.log(roller('best 1 of 2d6'));
console.log(roller('worst 2 of 3d6'));
console.log(roller('5d6 +4'));
console.log(roller('worst 1 of 2d20 +1'));
console.log(roller('worst 2 of 3d20+2-2'));
console.log(roller('worst 2 of 3d20-4-2'));
console.log(roller('best 2 of 5d4'));

#!/usr/bin/node
'use strict';

import yadr  from './yadr';

var argv = process.argv.splice(2);
var expr = argv.join(' ');
if (!expr) {
  console.warn('Missing expression');
  process.exit();
}

//=> 6 from 3d6. [ from (2,1,3)]
try {
  yadr().roll(expr).run(function(result) {
    console.log(`${result.input}: rolled [${result.rolls}] ${result.taken?`taking [${result.taken}]`: ''} ${result.mod?`${result.sign}${result.mod}`: ''} = ${result.total}`);
  });
} catch(e) {
  console.error(e);
}

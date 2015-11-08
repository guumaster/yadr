#!/usr/bin/node
'use strict';

import yadr  from './yadr';

var argv = process.argv.splice(2);
var expr = argv.join(' ');
if (!expr) {
  console.warn('Missing expression');
  process.exit();
}

try {
  console.log( yadr().roll(expr).run() );
} catch(e) {
  console.error(e);
}

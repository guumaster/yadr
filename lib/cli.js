#!/usr/bin/node
import { roller } from './yadr';

var argv = process.argv.splice(2);
var expr = argv.join(' ');
if (!expr) {
  console.warn('Missing expression');
  process.exit();
}

try {
  console.log( roller(expr));
} catch(e) {
  console.error(e);
}

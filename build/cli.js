#!/usr/bin/node
'use strict';

var _yadr = require('./yadr');

var argv = process.argv.splice(2);
var expr = argv.join(' ');
if (!expr) {
  console.warn('Missing expression');
  process.exit();
}

try {
  console.log((0, _yadr.roller)(expr));
} catch (e) {
  console.error(e);
}
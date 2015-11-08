#!/usr/bin/node

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _yadr = require('./yadr');

var _yadr2 = _interopRequireDefault(_yadr);

var argv = process.argv.splice(2);
var expr = argv.join(' ');
if (!expr) {
  console.warn('Missing expression');
  process.exit();
}

try {
  console.log((0, _yadr2['default'])().roll(expr).run());
} catch (e) {
  console.error(e);
}
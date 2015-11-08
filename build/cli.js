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

//=> 6 from 3d6. [ from (2,1,3)]
try {
  (0, _yadr2['default'])().roll(expr).run(function (result) {
    console.log(result.input + ': rolled [' + result.rolls + '] ' + (result.taken ? 'taking [' + result.taken + ']' : '') + ' ' + (result.mod ? '' + result.sign + result.mod : '') + ' = ' + result.total);
  });
} catch (e) {
  console.error(e);
}
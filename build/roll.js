'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _helpers = require('./helpers');

var roll = function roll(total, dices) {
  var rolled = (0, _helpers.range)(Number(total)).map(dices);
  return {
    roll: rolled,
    label: '' + total + dices._name,
    total: (0, _helpers.sum)(rolled)
  };
};

exports.roll = roll;
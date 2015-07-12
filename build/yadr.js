'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _roll = require('./roll');

var _helpers = require('./helpers');

var _parser = require('./parser');

var _mods = require('./mods');

if (!Array.from) {
  require('babel/polyfill');
}

var roller = function roller(str) {
  var formatted = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

  var info = (0, _parser.parser)(str);
  var dice = (0, _helpers.makeDice)(info.sides);
  var r = (0, _roll.roll)(info.dices, dice);

  if (info.type === 'best') {
    r = (0, _mods.best)(info.take, r);
  } else if (info.type === 'worst') {
    r = (0, _mods.worst)(info.take, r);
  }

  if (info.sign === '+') {
    r = (0, _mods.plus)(info.mod, r);
  } else if (info.sign === '-') {
    r = (0, _mods.minus)(info.mod, r);
  }

  return formatted ? (0, _parser.format)(r) : r;
};

exports.roller = roller;
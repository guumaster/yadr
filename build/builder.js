'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _mods = require('./mods');

var _roll = require('./roll');

var _helpers = require('./helpers');

var _parser = require('./parser');

var dices = require('./dices');

exports.format = _parser.format;
exports.roll = _roll.roll;
exports.plus = _mods.plus;
exports.minus = _mods.minus;
exports.best = _mods.best;
exports.worst = _mods.worst;
exports.dices = dices;
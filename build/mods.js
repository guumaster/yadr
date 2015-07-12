'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _helpers = require('./helpers');

var plus = function plus(extra, roll) {
  roll = (0, _helpers.clone)(roll);
  roll.plus = (roll.plus || 0) + extra;
  roll.label = (0, _helpers.label)(roll);
  roll.total = total(roll) + roll.plus;
  return roll;
};

var total = function total(roll) {
  return (0, _helpers.sum)(roll.best ? roll.best : roll.worst ? roll.worst : roll.roll);
};

var minus = function minus(extra, roll) {
  roll = (0, _helpers.clone)(roll);
  roll.plus = (roll.plus || 0) + extra;
  roll.label = (0, _helpers.label)(roll, '-');
  roll.total = total(roll) + roll.plus;
  return roll;
};

var best = function best(total, roll) {

  if (Number(total) >= roll.roll.length) return roll;

  var _split = split(total, roll, true);

  var _split2 = _slicedToArray(_split, 2);

  var best = _split2[0];
  var rest = _split2[1];

  roll = (0, _helpers.clone)(roll);
  roll.best = best;

  roll.total = roll.total - (0, _helpers.sum)(rest);

  return roll;
};

var worst = function worst(total, roll) {

  if (Number(total) >= roll.roll.length) return roll;

  roll = (0, _helpers.clone)(roll);

  var _split3 = split(total, roll);

  var _split32 = _slicedToArray(_split3, 2);

  var rest = _split32[0];
  var best = _split32[1];

  roll.worst = rest;
  roll.total = roll.total - (0, _helpers.sum)(best);

  return roll;
};
var sortAsc = function sortAsc(a, b) {
  return a - b;
};
var sortDes = function sortDes(a, b) {
  return b - a;
};

var split = function split(total, roll) {
  var reverse = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  var sorted = Array.from(roll.roll).sort(reverse ? sortDes : sortAsc);
  return [Array.from(sorted).slice(0, total), Array.from(sorted).slice(total)];
};

exports.plus = plus;
exports.minus = minus;
exports.best = best;
exports.worst = worst;
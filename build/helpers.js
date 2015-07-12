'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var sum = function sum(x) {
  return x.reduce(function (a, b) {
    return a + b;
  }, 0);
};

var range = function range(total) {
  return Array.from(Array(Number(total)).keys());
};

var rnd = function rnd(top) {
  return Math.round(Math.random() * (top - 1)) + 1;
};

var clone = function clone(obj) {
  return Object.assign({}, obj);
};

var makeDice = function makeDice(x) {
  var fn = function fn() {
    return rnd(x);
  };
  fn._name = 'd' + x;
  return fn;
};

var label = function label(roll) {
  roll.label = roll.label.split(/([\+-])/)[0];

  if (!roll.plus) {
    return roll.label;
  }
  var sign = roll.plus > 0 ? '+' : '-';
  return '' + roll.label + sign + Math.abs(roll.plus);
};

exports.clone = clone;
exports.sum = sum;
exports.range = range;
exports.label = label;
exports.makeDice = makeDice;
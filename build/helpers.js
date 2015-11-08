'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var composeAll = function composeAll(fns) {
  return fns.reduce(function (f, g) {
    return function () {
      return f(g.apply(undefined, arguments));
    };
  });
};
exports.composeAll = composeAll;
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
exports.isFunction = isFunction;
var isString = function isString(value) {
  return typeof value === 'string';
};
exports.isString = isString;
var range = function range(total) {
  return Array.from(Array(Number(total)).keys());
};
exports.range = range;
var take = function take(x, arr) {
  return arr.slice(0, x);
};
exports.take = take;
var id = function id(x) {
  return x;
};
exports.id = id;
var sum = function sum(x) {
  return x.reduce(function (a, b) {
    return a + b;
  }, 0);
};
exports.sum = sum;
var rnd = function rnd(top) {
  return Math.round(Math.random() * (top - 1)) + 1;
};
exports.rnd = rnd;
var dice = function dice(x) {
  return function () {
    return rnd(x);
  };
};
exports.dice = dice;
var up = function up(a, b) {
  return a - b;
};
exports.up = up;
var down = function down(a, b) {
  return b - a;
};
exports.down = down;
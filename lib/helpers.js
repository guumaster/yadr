'use strict';

export const composeAll = (fns) => fns.reduce( (f, g) => (...args) => f(g(...args)) );
export const isFunction = (value) => typeof value === 'function';
export const isString = (value) => typeof value === 'string';
export const range = total => Array.from(Array(Number(total)).keys());
export const take = (x, arr) => arr.slice(0, x);
export const id = (x) => x;
export const sum = x =>  x.reduce((a,b) => a+b, 0);
export const rnd = top => Math.round((Math.random()*(top-1))) + 1;
export const dice = (x) => () => rnd(x);
export const up = (a,b) => a-b;
export const down = (a,b) => b-a;

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = yadr;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parser = require('./parser');

var _parser2 = _interopRequireDefault(_parser);

var _helpers = require('./helpers');

function yadr() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$debug = _ref.debug;
  var debug = _ref$debug === undefined ? false : _ref$debug;

  var start = {
    mod: 0,
    sign: '+',
    sides: '',
    dices: '',
    take: 0,
    type: undefined,
    rolls: [],
    result: {},
    debug: debug
  };

  return Object.assign(Object.create(Roller), start);
}

var Roller = {
  roll: function roll(str) {
    Object.assign(this, (0, _parser2['default'])(str));
    return this;
  },
  then: function then() {
    return this;
  },
  takeBest: function takeBest() {
    var x = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

    this.take = x;
    this.type = 'best';
    return this;
  },
  takeWorst: function takeWorst() {
    var x = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

    this.take = x;
    this.type = 'worst';
    return this;
  },
  minus: function minus(x) {
    this.mod -= x;
    this.sign = this.mod <= 0 ? '-' : '+';
    return this;
  },
  plus: function plus(x) {
    this.mod += x;
    this.sign = this.mod <= 0 ? '-' : '+';
    return this;
  },
  run: function run(fn) {
    return this.make(fn)();
  },
  make: function make(fn) {
    var self = this;
    var final = composeRoll(this);

    return function (input) {
      if ((0, _helpers.isString)(input)) {
        self.roll(input);
        final = composeRoll(self);
      }
      var result = final();
      return (0, _helpers.isFunction)(fn) ? fn(result) : result.total;
    };
  }
};

var composeRoll = function composeRoll(obj) {
  // return a composed function
  return (0, _helpers.composeAll)([
  // modder
  adder(obj),
  // taker
  taker(obj),
  // roller
  roller(obj)]);
};

var roller = function roller(info) {
  return function () {
    info.debug && console.log('rolling ' + info.dices + 'd' + info.sides);
    info.rolls = (0, _helpers.range)(Number(info.dices)).map((0, _helpers.dice)(info.sides));
    return info.rolls;
  };
};

var taker = function taker(info) {
  if (!info.take) return _helpers.id;

  return function (rolls) {
    info.debug && console.log('taking ' + info.take + ' ' + info.type + ' from ' + rolls);
    info.taken = (0, _helpers.take)(info.take, Array.from(rolls).sort(info.type === 'best' ? _helpers.down : _helpers.up));
    return info.taken;
  };
};

var adder = function adder(info) {
  return function (rolls) {
    if (info.mod) {
      info.debug && console.log((info.mod < 0 ? 'sub' : 'add') + ' ' + info.mod);
    }
    info.total = (0, _helpers.sum)(rolls) + info.mod;
    return info;
  };
};
module.exports = exports['default'];
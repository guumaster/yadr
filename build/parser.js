'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

exports['default'] = function (str) {
  var match = str.match(/(?:(?:(best|worst)(?: (\d+))? ),?(?: *(?:of|from) )?)?(?:(\d+)?d(\d+))( *(?: *(?:[+-] *\d+))+)*/);

  var _match = _slicedToArray(match, 6);

  var input = _match[0];
  var type = _match[1];
  var take = _match[2];
  var _match$3 = _match[3];
  var dices = _match$3 === undefined ? 1 : _match$3;
  var sides = _match[4];
  var _match$5 = _match[5];
  var mod = _match$5 === undefined ? '' : _match$5;

  take = Number(take) || undefined;
  dices = Number(dices);
  sides = Number(sides);
  mod = (mod.match(/(\+ *(\d+)|- *\d+)/g) || []).map(function (i) {
    return i.replace(/ +/g, '');
  }).reduce(function (a, b) {
    return Number(a) + Number(b);
  }, 0);
  var sign = mod >= 0 ? '+' : '-';
  return { input: input, type: type, take: take, dices: dices, sides: sides, sign: sign, mod: mod };
};

;
module.exports = exports['default'];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = fuc;
exports["default"] = _default;

function meme(numero) {
  var o = numero.toString().split('');

  for (var i in o) {
    o.parseInt(i);
  }

  var par = o[1] + o[3] + o[5];
  var impar = o[0] * 3 + o[2] * 3 + o[4] * 3 + o[6] * 3;
  var resultado = 10 - (par + impar) % 10;

  if (resultado == o[o.length]) {
    return 1;
  } else {
    return 0;
  }
}
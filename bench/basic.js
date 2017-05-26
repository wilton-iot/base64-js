define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var random = require('crypto').pseudoRandomBytes

var b64 = require('base64-js/')
var data = random(1e6).toString('base64')
var start = Date.now()
var raw = b64.toByteArray(data)
var middle = Date.now()
data = b64.fromByteArray(raw)
var end = Date.now()

console.log('decode ms, decode ops/ms, encode ms, encode ops/ms')
console.log(
  middle - start, data.length / (middle - start),
  end - middle, data.length / (end - middle))

return module.exports;});

define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var test = require('tape')
var b64 = require('base64-js/')

test('convert big data to base64', function (t) {
  var b64str, arr, i, length
  var big = new Uint8Array(64 * 1024 * 1024)
  for (i = 0, length = big.length; i < length; ++i) {
    big[i] = i % 256
  }
  b64str = b64.fromByteArray(big)
  arr = b64.toByteArray(b64str)
  t.ok(equal(arr, big))
  t.end()
})

function equal (a, b) {
  var i
  var length = a.length
  if (length !== b.length) return false
  for (i = 0; i < length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}

return module.exports;});

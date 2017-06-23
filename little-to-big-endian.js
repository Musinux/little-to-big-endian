#!/usr/bin/env node

var str = process.argv[2]

function btl (str) {
  var addr = parseInt(str)
  var one = (addr & 0x000000FF).toString(16)
  var two = ((addr & 0x0000FF00) >>> 8).toString(16)
  var thr = ((addr & 0x00FF0000) >>> 16).toString(16)
  var fou = ((addr & 0xFF000000) >>> 24).toString(16)

  if (one.length < 2) one = '0' + one
  if (two.length < 2) two = '0' + two
  if (thr.length < 2) thr = '0' + thr
  if (fou.length < 2) fou = '0' + fou
  return '\\x' + one + '\\x' + two + '\\x' + thr + '\\x' + fou
}

if (require.main === module) {
  process.stdout.write(btl(str))
}

function btl2 (str) {
  var addr = parseInt(str)
  var one = addr & 0x000000FF
  var two = (addr & 0x0000FF00) >>> 8
  var thr = (addr & 0x00FF0000) >>> 16
  var fou = (addr & 0xFF000000) >>> 24

  return [one, two, thr, fou]
}

module.exports = btl2

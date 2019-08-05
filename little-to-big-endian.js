#!/usr/bin/env node

var str = process.argv[2]
var bytes = process.argv[3]

function btl (str, bytes = 4) {
  var addr = BigInt(str)
  var out = ''
  const ff = BigInt(0xFF)
  for (let i = 0n; i < BigInt(bytes); i++) {
    var a = ((addr & (ff << (i * 8n))) >> (8n * i)).toString(16)
    if (a.length < 2) a = '0' + a
    out += '\\x' + a
  }
  return out
}

if (require.main === module) {
  if (!str || !bytes) {
    console.log("usage: ./l2b.js <hex string> <bytes>")
    process.exit(0)
  }
  process.stdout.write(btl(str, bytes))
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

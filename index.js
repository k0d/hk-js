const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
console.log("Setting up serial port")
const port = new SerialPort('/dev/tty.wchusbserialfd130', { baudRate: 38400 })
port.on('error', function (err) {
    console.log(err.message)
})

console.log("Setting up listener")
const parser = new Readline()
port.pipe(parser)
parser.on('data', line => console.log(`-> ${line}`))

console.log("Sending power on command")
const cmd = new Buffer.from([0x50, 0x43, 0x53, 0x45, 0x4e, 0x44, 0x02, 0x04, 0x80, 0x70, 0xc0, 0x3f, 0x40, 0x4f])
console.log("<- ", cmd)
port.write(cmd)

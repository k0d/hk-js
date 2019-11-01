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
parser.on('data', line => console.log(`> ${line}`))

console.log("Sending power on command")
port.write(new Buffer.from([0x80, 0x70, 0xC0, 0x3F]))
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/tty.wchusbserialfd130', { baudRate: 38400 })

const parser = new Readline()
port.pipe(parser)

parser.on('data', line => console.log(`> ${line}`))
port.write(new Buffer([0x80, 0x70, 0xC0, 0x3F]))
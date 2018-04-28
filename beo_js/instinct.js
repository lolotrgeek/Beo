// Beowulf - instinct.js
// 

// You are your machine id.
id = require ('node-machine-id')
exports.me = id.machineIdSync()

// Your network IP address.
ip = require('ip')    
exports.where = ip.address()

// You know time as UTC in milliseconds since January 1, 1970.
exports.time = Date.now()
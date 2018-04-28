// Beowulf - beowulf.js
// .. I shall fulfill that purpose, prove myself with a proud deed or meet my death...

// cluster
exports.clusterMind = require('./cluster_mind.js')
exports.clusterOthers = require('./cluster_others.js')
exports.clusterSelf = require ('./cluster_self.js')

// memory
exports.condense = require('./memory_condense.js')
exports.recall = require('./memory_recall.js')
exports.remember = require('./memory_remember.js')

//senses
exports.senses = require('./senses.js')

//high
exports.high = require('./high.js')

//inherent
var id = require ('node-machine-id')
exports.me = id.machineIdSync()

var ip = require('ip')    
exports.where = ip.address()

exports.time = Date.now()
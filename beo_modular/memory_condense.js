// Beowulf - condense.js
// Condense events into patterns.

beo = require('./beowulf.js')
Q = require('q')

var higher = beo.high
var type = 'event'
var what = 'motion'

Q.denodeify(reCall(type, what))
.then 
    { console.log(higher.data), beo.clusterMind}
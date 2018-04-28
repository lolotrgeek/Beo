// Beowulf - cluster - mind.js
// Form patterns from data.
beo = require('./beowulf.js')
mind = require('clusters')

// transcend data
higher = beo.high

// find the cluster size
clusterSize = beowulf.clusterSelf.size

// Set k to number of nodes on the cluster
mind.k (clusterSize)

mind.iterations(750)

mind.data(higher.data)

pattern = mind.clusters()

var data = JSON.stringify(pattern)

var map = pattern.centroid

console.log (data)

// remember the pattern
var type = 'pattern'

beowulf.remember(type, data, err)
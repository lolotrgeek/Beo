clusterMind = require('clusters')
higher = require ('./high.js')

// Number of clusters
clusterMind.k (3)

// Number of iterations 
clusterMind.iterations(750)

// recall events
clusterMind.data(higher.data)

pattern = clusterMind.clusters()

var data = JSON.stringify(pattern)

//console.log (data)

// know the cluster
var type = 'pattern'

require('./remember.js').remember(type, data, err)
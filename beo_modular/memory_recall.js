// Beowulf - recall.js
// recall data.

Cluster = require('gun')
cluster = Cluster()
beo = require('./beowulf.js')

module.exports.reCall = reCall

function reCall(type, what, err) {

    cluster.get(type).map().path(what).on(

        (recaller, err) => {
            
            high = beo.high

            recalling = recaller.split(',')

            recalled = []

            for(i=0; i < recalling.length; i++)
                recalled.push(parseInt(recalling[i]))
            
             high.data.push(recalled)

        })
}

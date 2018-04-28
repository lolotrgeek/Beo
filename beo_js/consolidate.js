// Beowulf - consolidate.js
// Consolidate data into clustered memories.

Cluster = require('gun')
cluster = Cluster()
//recall = require ('./recall.js')
higher = require ('./high.js')
Q = require('q')

type = 'event'
what = 'motion'

Q.denodeify(cluster.get(type).map().path(what).on(

        (recaller, err) => {

            high = require ('./high.js')

            recalling = recaller.split(',')

            recalled = []

            for(i=0; i < recalling.length; i++)
                recalled.push(parseInt(recalling[i]))
            
             high.data.push(recalled)

        })
    )
.then 
    { console.log(higher.data), require ('./clustermind.js') }
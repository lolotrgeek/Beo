// Beowulf - recall.js
// Recall data by type.

Cluster = require('gun')
cluster = Cluster()

module.exports.reCall = reCall

function reCall(type, what, promise) {

    // If a type exists...
    if (type) {

         cluster.get(type).map().path(what).val(
             
             function (recaller , err) {
            
            recalling = recaller.split(',')
 
            recalled = []

            for(i=0; i < recalling.length; i++)
                recalled.push(parseInt(recalling[i]))

        })

     } else { 
        console.log (err)
     }
}
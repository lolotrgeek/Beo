// Beowulf - remember.js
// Remember data by type and input.

err = null

module.exports.remember = function (type, data, subtype, err) {
        
    // If a type exists...
    if (type) {
        // ...check for a subtype...
        if (subtype) {

            //...if a subtype exists, remember data by subtype...
            remember = cluster.get(type).get(subtype)
            remember.set(data)
                
            console.log ('Remembering ', data , 'by ' , subtype, '...')

        } else {

            // ...otherwise, remember data by type...
            remember = cluster.get(type)
            remember.set(data)
                
            console.log ('Remembering ', data , 'by ' , type, '...')
        }
    // ... but if no type exists... 
    } else {
        // ...error.
        console.log (err)
    }
}
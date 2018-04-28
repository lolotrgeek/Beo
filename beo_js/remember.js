// Beowulf - remember.js
// Remember data by type and input.

err = null

module.exports.remember = remember

function remember(type, data, err) {
        
    // If a type exists...
    if (type) {

        //... remember data as type...
        
        cluster.get(type).set(data)

        console.log ('Remembering ', data , 'as ' , type, '...')

    // ... but if no type exists... 
    } else {
        // ...error.
        console.log (err)
    }
}
// Beowulf - recall.js
// recall data by type
    
    type = null

module.exports.recall = function (type) {

    gun.get(type).map(function(node){
        console.log('remembered', node)
    })
}


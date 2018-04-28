// Beowulf - remember.js
// remember data by type
   
    type = null
   
    data = null 
    
module.exports.remember = function(type, data, err) {
        
        // if a type exists...
        if (type) {
           
            //...remember data by type
            remember = gun.get(type)
            remember.set(data)
                
             console.log ('remembering...')
             
             return remember

        } else {
            console.log (err)
        }
}
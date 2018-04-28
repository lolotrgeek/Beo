//Beowulf - Sense.js
// sense motion

var Gpio = require('onoff').Gpio,
    pin = 14,
    pir = new Gpio(pin, 'in', 'rising')
 
pir.watch(function(err, value) {
    if (err) exit()
        
    var time = Date.now()
    
    console.log('Motion detected')
    console.log(time)

    var type = 'event' 
    var data = {'time': time , 'stimulus': value}
        
        
    if(value == 1)  require('./remember.js').remember(type, data, err)
        require('./recall.js').recall(type)
   
})
 
console.log('Sensing...')

 
function exit() {
  pir.unexport()
  process.exit()
}

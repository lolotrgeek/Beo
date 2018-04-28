// Beowulf - sleep.js
// Move data to and from the dream. (Nodejs <-> Python)
// TODO: if necessary, shutdown senses.

beo = require('./beowulf.js')
spawn = require('child_process').spawn
py = spawn('python', ['sleep.py'])

higher = beo.high
data = higher.data
dataString = ''

py.stdout.on('data', function(data){
  dataString += data.toString()
});
py.stdout.on('end', function(){
  console.log('Sum of numbers=',dataString)
});
py.stdin.write(JSON.stringify(data))
py.stdin.end()
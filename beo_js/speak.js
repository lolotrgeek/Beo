// Beowulf - speak.js
// Communicate with python


higher = require ('./high.js')
spawn = require('child_process').spawn

py    = spawn('python', ['listen.py'])
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
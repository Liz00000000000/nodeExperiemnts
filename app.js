const path = require('path')
const pathObj = path.parse(__filename)
const os = require('os')
const fs = require('fs')
const files = fs.readdirSync('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files)
})

const totalMem = os.totalmem()
const freeMem = os.freemem()
require('./logger')

sayName = name =>{
    if (name === 'Greg' || name === 'Greggory'){
        console.log(name + ', you are the most beatiful')
    } else {
        console.log(name + ', you are beautiful')
    }
}

exports.sayHi = sayName

sayName('Liz') //Global
sayName('Greggory') //Global 

const message = 'Hi GREG!'

log('I hope this is working lol')

// console.log('Total Memoroy: ' + totalMem)

// console.log('Free Memory: ' + freeMem)

console.log(`Total Amount of Gregs is ${totalMem}`)

console.log(files)



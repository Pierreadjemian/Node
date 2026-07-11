
const {EventEmitter } = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('lunch', () =>{
    console.log('yum')
})
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

const { readFile , readFileSync } = require('fs');
const txt = readFileSync ('./hello.txt' , 'utf8' , (err, txt) =>{
console.log(txt)
});
console.log ('Im alive and deployed')
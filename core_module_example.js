//OS module example

const os = require('os');
var totalMemory = os.totalmem(); 
//Get the total memory
var freeMemory = os.freemem();

//path module example

const path = require('path');
var pathObj = path.parse(__filename); 
// Get the root dir base ext name of the actual app

//fs module example

const fs =require('fs');
const files = fs.readdirSync('./'); // Get all the files in the actual folder

// events module example

const EventEmitter = require('events'); // a class
const emitter = new EventEmitter(); //a new object

// Register a listener for the event | the on method is like the addEventListener method
emitter.on('messageLogged', function(arg){ 
	console.log('Listener called', arg)
})
/*
OR
emitter.on('messageLogged', (arg) => { 
	console.log('Listener called', arg)
})
OR
class Logger extends EventEmitter {
	log(message){
		//Send an HTTP request
	console.log(message);
	//Raise an event
	this.emit('messageLogged')
	}
}
*/


//Raise an event
emitter.emit('messageLogged', {id:1, url: ''});  
  //The event, name is messageLogged and the dictionnary are datas we want to pass
  //emit function is used to raise an event, signal that an event is happening


//http module example
var http = require('http');

const server = http.createServer();

//a listener and the name of the event is connection
server.on('connection', socket => {
	console.log('New connection..')
});

server.listen(3000);
console.log('Listening on port 3000...');
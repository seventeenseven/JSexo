const fs =require('fs');

fs.readFile('./text.txt', (error, data) => {
	if (error){
		console.log('Error dey');
	}
	console.log(data.toString('utf8')); //This is asynchronous
})

const file = fs.readFileSync('./text.txt');
console.log('The synchronous way:',file.toString());
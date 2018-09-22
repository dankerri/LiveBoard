var io = require('socket.io')();

io.on('connection', client=>{
	// Search room Side
	client.on('sitdown', room=>{
		console.log("visitor sits down in" + room);
		client.emit('exist');

	});

	// LiveBoard side
	client.on('addUser', room =>{
		client.join(room);
		console.log(room + " Add a USER");
	})


	// Scanner side
	client.on('addScanner', (room)=>{
		client.join(room);
		console.log("THEER ARE "
			+ io.sockets.adapter.rooms[room].length 
			+ " GUYS IN THE "
			+ room 
			+ " NOW.")
	});

	client.on('updateCode', code=>{
		io.sockets.in(code.room).emit('newCode', code.code);
		console.log("GET "+code.room+" UPDATE " + code.code);
	});
});

io.listen(5000);
console.log('port 5000')


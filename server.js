var io = require('socket.io')();

io.on('connection', client=>{
	// Search room Side
	client.on('check', room=>{
		console.log('check ' + room);

		if ( io.sockets.adapter.rooms[room] === undefined ) {
			client.emit('unexist', 'THE '+ room +' DOSEN\'T CREATE YET');			
		}
		else {
			client.emit('exist');
		}
	});

	// LiveBoard side
	client.on('addUser', room =>{
		client.join(room);
		console.log("Add a USER");
	})


	// Scanner side
	client.on('addScanner', (room)=>{
		client.join(room);
		console.log("THEER ARE "+ io.sockets.adapter.rooms[room].length +" SCANNER NOW.")
	});

	client.on('updateCode', code=>{
		io.sockets.in(code.room).emit('newCode', code.code);
		console.log("GET UPDATE");
	});
});

io.listen(5000);
console.log('port 5000')
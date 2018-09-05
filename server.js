var io = require('socket.io')();

var roomList = [ ];

var codeInRoom = { };

io.on('connection', client=>{
	console.log('client connected');

	//LiveBoard Side
	client.on('check', room=>{
		console.log('check ' + room);

		if( roomList.indexOf(room) > -1 ) {
			client.emit('exist', ' ');
		}
		else {
			client.emit('unexist', 'The room dosen\'t create yet');
		}
	});

	client.on('addUser', room =>{
		client.join(room);
		console.log("add a user");
	})


	// Scanner side
	client.on('addRoom', (room)=>{
		if(roomList.indexOf(room) > -1 ) {
			console.log('room '+ room +' exist');

		} 
		else {
			roomList.push(room);	

			codeInRoom[room] = ' ';
			console.log('create room ' + room);
			
			client.join(room);
		}
	});

	client.on('updateCode', code=>{
		io.sockets.in(code.room).emit('newCode', code.date)
	})

});

io.listen(5000);
console.log('port 5000')
var io = require('socket.io')();

var roomList = [ ];

var codeInRoom = { };

io.on('connection', client=>{
	console.log('client connected');

	//LiveBoard Side
	client.on('check', (room)=>{

		console.log('check require: '+room);

		if(roomList.indexOf(room) > -1) {

			client.emit('exist', ' ');
		} 
		else {
			
			client.emit('unexist', 'The room dosen\'t created yet');
		}
	});

	client.on('addUser', room =>{
		client.join(room);

		var date = new Date();

		io.sockets.in(room).emit('hi', codeInRoom[room]);
		console.log("add a user");
	})


	// Scanner side
	client.on('addRoom', (room)=>{
		if(roomList.indexOf(room) > -1 ) {
			console.log('room exist, start updating code');
			
			setInterval(()=>{
				var date = new Date();
				codeInRoom[room] = date

				io.sockets.in(room).emit('hi', codeInRoom[room]);
				console.log('sent')
			}, 1000)
		} 
		else {
			roomList.push(room);	

			codeInRoom[room] = ' ';
			console.log('create room ' + room);
			
			client.join(room);
			setInterval(()=>{
				var date = new Date();
				codeInRoom[room] = date

				io.sockets.in(room).emit('hi', codeInRoom[room]);
				console.log('sent');
			}, 1000)
		}
	});

});

io.listen(5000);
console.log('port 5000')
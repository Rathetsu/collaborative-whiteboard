var express = require('express');
var http = require('http').createServer(express);
var io = require('socket.io')(http);

var port = process.env.YOUR_PORT || process.env.PORT || 4130;

http.listen(port, () => {
	console.log('listening on *:' + port);
});

io.on('connection', (socket) => {
	console.log('a user connected');

	socket.on('canvas-data', (data) => {
		socket.broadcast.emit('canvas-data', data);
	})
});


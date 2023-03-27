const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let players = [];

io.on('connection', (socket) => {

  socket.on('addPlayer', (name) => {
    players.push({
      id: socket.id,
      name: name
    });
    io.emit('updatePlayers', players);
    console.log(players.name);
  });

  socket.on('disconnect', () => {
    players = players.filter(player => player.id !== socket.id);
    io.emit('updatePlayers', players);
  });

});

server.listen(3000, () => {
    console.log('listening on *:3000');
    }
);

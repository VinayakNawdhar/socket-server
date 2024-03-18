const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const { join } = require('node:path');

const app = express();
const server = createServer(app);
const io = new Server(server,{
  cors : {origin : ['http://localhost:3000','https://fio-food-in-and-out.vercel.app/']}
});

app.get('/', (req, res) => {
  res.send('<h1>Theeee</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('placeOrder',()=>{
    console.log('order placed')
    io.emit('orderPlaced')
  })
});


server.listen(3001, () => {
  console.log('server running at http://localhost:3001');
});
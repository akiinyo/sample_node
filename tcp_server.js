var net = require('net')

var server = net.createServer(function(socket) {
  console.log('connected');
  socket.write('welcome to node.js server\n');
  socket.on('data', function(data) {
    socket.write('you said '+data);
  });
});

server.listen(8111);
console.log('server start listening on 8111');

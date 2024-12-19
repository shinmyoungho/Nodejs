var http = require('http');

//웹 서버 객체를 만듭니다.

var server = http.createServer();

var port =3000;
server.listen(port,function(){
   console.log(`웹 서버가 시작되었스빈다.`);
});

server.on('connection',function(socket){
   var addr = socket.address();
   console.log(`클라이언트가 접속했습니다 ${addr.address} ${addr.port}`);
});
server.on('request',function(req,res){
   console.log('클라이언트 요청이 들어왔습니다.');
   console.log(req);
});

server.on('close',function(){
   console.log('서버가 종료됩니다.');
})

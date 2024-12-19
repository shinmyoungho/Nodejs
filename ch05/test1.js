var http = require('http');

//웹 서버 객체를 만듭니다.
var server = http.createServer();

var port =3000;
// server.listen(port,function(){
//    console.log('웹 서버가 시작되었습니다.%d',port);
// });
var host ='192.168.219.108';
server.listen(port,host,50000,function(){
   console.log(`웹 서버가 시작되었습니다`)

})
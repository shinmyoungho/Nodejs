//시스템 정보를 알려주는 내장 모듈 os
var os = require('os');
console.log(`운영체제 호스트 이름 ${os.hostname()}`);
console.log(`시스템 전체 메모리 용량 ${os.totalmem()}`);
console.log(`가용할 수 있는 메모리 용량${os.freemem()}`);
console.dir('네트워크 인터페이스 os.networkInterfaces()'+ JSON.stringify(os.networkInterfaces()),null,'\t');
// console.dir(`CPU : ${os.cpus()}`);

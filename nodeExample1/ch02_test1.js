let result = 0;

console.time('duration_sum');
for (var i = 1 ; i<=1000; i++){
   result +=i;
}
console.timeEnd('duration_sum');
console.log(`1부터 1000까지 더한 값 : ${result}`);

console.log('현재 실행한 파일 이름 : %s',__filename);
console.log('현재 실행한 파일의 패스:%s',__dirname);

var person = {
   name:'신명호',
   age:24,
}
console.dir(person);
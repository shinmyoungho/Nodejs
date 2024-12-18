var output = '안녕 1!';
var buffer1 = Buffer.alloc(9);
var len = buffer1.write(output,'utf-8');
console.log(`첫 번째 버퍼의 문자열 ${buffer1.toString()}`);

// 버퍼 객체에 문자열을 바로 집어 넣는다.
var buffer2 = Buffer.from('안녕 2!');
console.log(`두 번째 버퍼의 문자열 : ${buffer2.toString()}`);

//타입을 확인합니다.
console.log(`버퍼의 객체의 타입 : ${Buffer.isBuffer(buffer1)}`);

//버퍼 객체에 들어있는 문자열 데이터를 문자열 변수로 만든다.
var byteLen = Buffer.byteLength(output);
var str1 = buffer1.toString();
var str2 = buffer2.toString();

//첫 번째 버퍼 객체의 문자열을 두번째 버퍼 객체로 복사합니다.
buffer1.copy(buffer2,0,0,len);
console.log(`두 번째 버퍼에 복사한 후의 문자열 : ${buffer2.toString()}`);
//두 개의 버퍼를 붙여 줍니다.
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log(`두 개의 버퍼를 붙인 후의 문자열 ${buffer3.toString()}`);
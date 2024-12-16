var calc = require('./calc');
console.log(calc.add(10,10));    // 모듈 선언 방법  1 exports객체에 속성을 추가한다.

var calc2 = require('./calc2');   // 모듈 선언 방법 2 module.exports = {} 객체를 추가한다.  
console.log(calc2.add(20,20));
var Calc = require('./calc3');

var calc = new Calc();
calc.emit('stop');

console.log(Calc.title+ '에 stop 이벤트 전달함');
console.log(calc.add(10,10));
var person= {};


person.age=24;
person.name ='신명호';

var func = function(a,b){
   return a+b;
}
person.add = func;

console.log(`더하기 : ${person.add(10,10)}`);
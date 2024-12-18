var person={};

person.age=24;
person.name='신명호';
person.add = function(a,b){
   return a+b;
}
console.log('더하기 : ',person.add(10,10));
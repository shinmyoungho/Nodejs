function add(a,b,callback){
   let result = a+b;

   callback(result);

   let history = function(){
      return `${a} + ${b} = ${result}`;
   }
   return history;
}

var add_history = add(10,10,function(result){
   console.log(`파라미터로 전달된 함수 실행됨.`);
   console.log(`결과 : ${result}`);
});

console.log(`프로시저 함수 실행 ${add_history()}`);


function add(a,b,callback){
   var result = a +b;
   callback(result);

   var count = 0;
   var history = function(){
      count ++;
      return `${count} : ${a} +${b} = ${result}`;
   }
   
   return history;
}

let add_history= add(10,10,function(data){
   console.log('파라미터로 전달된 콜백 함수 호출');
   console.log(`더하기 (10,10)의 결과 ${data}`);
})
console.log(add_history());
console.log(add_history());
console.log(add_history());
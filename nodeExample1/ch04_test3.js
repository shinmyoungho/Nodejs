process.on('tick',function(count){
   console.log('tick 이벤트 발생함 : %s',count);
});

setTimeout(()=>{
   console.log('tick 이벤트 전달 시도');
   process.emit('tick',2);
},2000)
process.on('exit',function(){
   console.log('exit 이벤트 발생함.');
});

setTimeout(()=>{
   console.log('2초 뒤 종료');

   process.exit();
},2000)
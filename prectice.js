const fs =require('fs');
const readStream = fs.createReadStream('./output.txt',{highWaterMark:30});


let byteRead = 0;

console.log(`'data' 이벤트 핸들러 등록 전. isFlowin : ${readStream.readableFlowing}`);

readStream.on('data',function(chunk){
   console.log(`${chunk.length} bytes 읽음`);
   byteRead += chunk.length;
   console.log(`총 바이트길이 : ${byteRead}`);

   //90bytes를 읽었으면 스트림을 잠시 중지한다.
   if(byteRead === 90){
      readStream.pause();
      console.log(`pause() 호출 후. isFlowin : ${readStream.readableFlowing}`);

      //스트림을 1초 뒤 다시 시작한다.
      setTimeout(()=>{
         readStream.resume();
         console.log(`resume 호출 후. is Flowin: ${readStream.readableFlowing}`);
      },1000);
      console.log(`비동기 비동기`);
      console.log(`비동기 비동기`);
      console.log(`비동기 비동기`);
      console.log(`비동기 비동기`);
      console.log(`비동기 비동기`);
   }
});
readStream.on('end',()=>{
   console.log('종료');
})
console.log(`data 이벤트 핸들러 등록 후 is Flowing: ${readStream.readableFlowing}`);

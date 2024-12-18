var fs =require('fs');

fs.open('./output.txt','r',function(err,fd){
   if(err) throw err;
   var buf0 = Buffer.alloc(10);
   console.log('버퍼가 맞나요? :',Buffer.isBuffer(buf0));

   fs.read(fd,buf0,0,buf0.length,null,function(err,bytesRead,buf){
      if(err) throw err;
      console.log(buf0);
      var inStr = buf.toString('utf-8',0,bytesRead);
      console.log(`파일에서 읽은 데이터 : ${inStr}`);

      console.log(err,bytesRead,buf);

      fs.close(fd,function(){
         console.log('output.txt 파일을 열고 읽기 완료');
      });
   });
});
var fs = require('fs');

fs.open('./output.txt','w',function(err,fd){
   if(err) throw err;

   var buf = Buffer.alloc(7);
   var str = '안녕';
   buf.write(str,'utf-8');
   fs.write(fd,buf,0,buf.length,null,function(err,wrttien,buffer){
      if(err) throw err;
      console.log(err,wrttien,buffer);

      fs.close(fd,function(){
         console.log('파일 열고 데이터 쓰고 파일 닫기 완료');
      });
   });
});
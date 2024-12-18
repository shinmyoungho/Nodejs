var fs = require('fs');

fs.writeFile('./output.txt','hello world','utf-8',function(err){
   if(err){
      console.log(`Error: ${err}`);
   }
   console.log(`파일 쓰기 완료`);
})
var fs = require('fs');

fs.mkdir('./docs',function(err){
   if(err) throw err;
   console.log('새로운 docs 폴더를 만들었습니다.');

   fs.rmdir('./docs',function(err){
      if(err) throw err;
      console.log('docs 삭제');
   })
})
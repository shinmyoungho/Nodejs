var fs = require('fs');

fs.readFile('./package.json','utf-8',function(err,data){
   
   console.log(data);
   
})

console.log('프로젝트 폴더 안의 package.json');
var fs = require('fs');

var infile = fs.createReadStream('./output.txt',{highWaterMark:30});
var outfile = fs.createWriteStream('./output2.txt',{flag:'w'});

infile.on('data',function(chunk){
   console.log(`버퍼 길이 ${chunk.length} 내용 ${chunk.toString()}`);
   outfile.write(data);
})

infile.on('end',function(){
   console.log('파일 읽기 종료');
   outfile.end(function(){
      console.log('파일 쓰기 종료');
   });
});
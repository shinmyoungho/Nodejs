var fs =require('fs');

var inname = './output.txt';
var outname = 'output2.txt';

fs.exists(outname,function(exists){
   if(exists){
      console.log('4');
      fs.unlink(outname,function(err){
         if(err) throw err;
         console.log(`기존파일 [${outname}] 삭제함`);
      });
      console.log('1');
   }
   console.log('2');
   // var infile = fs.createReadStream(inname,{flags:'r'});
   // var outfile = fs.createWriteStream(outname,{flags:'w'});

   // infile.pipe(outfile);
   // console.log(`파일 복사 [${inname}] => [${outname}]`);
});
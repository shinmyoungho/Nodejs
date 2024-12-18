var path = require('path');

//디렉터리 이름 합치기
var directories = ['user','mh', 'workspace'];
var docsDirectory = directories.join(path.sep);
console.log(`문서 디렉토리:${docsDirectory}`);

// 디렉토리 이름과 파일 이름 합치기
var curPath = path.join('/user/mh', 'js.exe');
console.log('파일 패스 : %s',curPath);

var filename = __filename;
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);
console.log(`directory : ${dirname} \n ${basename}\n ${extname}`);
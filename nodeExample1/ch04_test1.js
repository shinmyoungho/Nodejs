var url = require('url');
const { queryObjects } = require('v8');

var curURL = url.parse('https://www.google.com/search?gs_ssp=eJzj4tDP1TcwqzTMMWD04iouSS1LVcjKTyoGAEfhBtQ&q=steve+jobs&oq=steve&gs_lcrp=EgZjaHJvbWUqCggBEC4Y1AIYgAQyCQgAEEUYORiABDIKCAEQLhjUAhiABDIKCAIQLhjUAhiABDIHCAMQLhiABDIHCAQQABiABDIHCAUQLhiABDINCAYQABiDARixAxiABDIHCAcQLhiABDIHCAgQLhiABDIHCAkQLhiABNIBCDQ5NTJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&sei=JltiZ_ebHbmt0-kPupHJmQY');

var curStr =url.format(curURL);

console.log(`주소 문자열 ${curStr}`);
console.log(curURL);

var queryString = require('querystring');
var param = queryString.parse(curURL.query);
console.log(`요청 파라미터 중 query의 값 ${param.q}`);
console.log(`원본 요청 파라미터 ${queryString.stringify(param)}`);
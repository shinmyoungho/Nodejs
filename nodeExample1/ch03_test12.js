var user=[{name:'명호',age:24},{name:'지향',age:28},{name:'유현',age:24}];
console.log(`unshift() 전 배열 길이 ${user.length}`);

user.unshift({name:'태규',age:25});
console.log(`unshift() 후 배열 길이 ${user.length}`);

user.shift();
console.log(`shift() 후 배열 길이 ${user.length}`);


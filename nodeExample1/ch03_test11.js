var user=[{name:'명호',age:24},{name:'지향',age:28},{name:'유현',age:24}];
console.log(`push() 전 배열의 요소의 수 :${user.length}`);

user.push({name:'준혁',age:25});

console.log(`push() 후 배열의 요소의 수 ${user.length}`);

user.pop();
console.log(`pop() 후 배열의 요소의 수 ${user.length}`);
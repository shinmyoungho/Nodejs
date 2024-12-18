var users=[{name:'명호'},{name:'지향'},{name:'유현'},{name:'준혁'}];

console.log(`배열의 길이: ${users.length}`);

for(let i = 0; i<users.length; i++){
   console.log(`배열의 요소 ${i}번째 이름  ${users[i].name}`);
}

//for each
users.forEach(function(item,index){
   console.log(`배열의 요소 #${index} 이름:${item.name}`);
});
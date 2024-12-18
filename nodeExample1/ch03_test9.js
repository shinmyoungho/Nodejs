var users = [{name:'신명호'},{name:'김지향'}];

users.push({name:'반유현'});

var add = function(a,b){
   return a+b;
}

users.push(add);
console.log(users.length);
console.log(users);
console.log(users[3](10,10));
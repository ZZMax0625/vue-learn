//创建带有三个初始化项的数组
let players = ["a","b","c"]; 
//a,b,c默认使⽤逗号分隔
console.log(players.toString());
//a,b,c 
console.log(players.toLocaleString()); 
//a&b&c,如果想⾃定义分隔符号使⽤join
console.log(players.join("&")); 
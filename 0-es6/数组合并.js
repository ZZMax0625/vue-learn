let players = ["curry","james","kobe"]
// 合并⼀个数组
let players2 = players.concat("jordan",["aaaa","bbbb"])
console.log(players2)


//数组下标从0开始
//从第2项开始剪切到最后，["james", "kobe", "jordan", "aaa", "bbb"]
console.log(players2.slice(1)) 
//从第2项开始剪切到第5项，不包含第5项。 ["james", "kobe", "jordan"]
console.log(players2.slice(1,4))
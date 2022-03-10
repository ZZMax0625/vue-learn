// //for in
// let players = ["curry","james","kobe"];
// for(index in players){
// console.log(index + ":" + players[index])
// }
// //for of
// for(player in players){
// console.log(player)
// }

//key&value
// let players = ["curry", "james", "kobe"];
// for (let index of players.keys()) {
//     console.log(index) //打印是0,1,2
// }
// for (let elem of players.values()) {
//     console.log(elem) //打印是"curry","james","kobe"
// }
// for (let [index, elem] of players.entries()) {
//     console.log(index, elem) //打印如下
// }


//迭代判定
let players = [{ name: "james", age: 36 },
               { name: "curry", age: 31 },
               { name: "kobe", age: 39 }]
//every⽅法，判断是否数组每⼀个对象的年龄都⼤于30
let isGt30 = players.every(function (value, index, arr) {
    return value.age > 30
})
console.log(isGt30) //true
//some⽅法，判断是否数组中有⾄少⼀个对象的名字包含cu
let isContainCu = players.some(function (value, index, arr) {
    return value.name.includes("cu")
})
console.log(isContainCu) //true
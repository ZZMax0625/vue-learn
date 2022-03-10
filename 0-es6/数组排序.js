let values = [1, 2, 5, 10, 19]
//数组倒序⽅法
values.reverse()
console.log(values.toString())
//数组排序⽅法
// values.sort()
//数组正向排序：1,10,19,2,5 
// console.log(values.toString())


//定义⽐较规则的函数
function compare(value1, value2) {
    //返回值三种可能，0，⼤于0，⼩于0 
    return value1 - value2 
}
//使⽤⽐较规则
values.sort(compare)
//排序结果：1,2,5,10,19 
console.log(values.toString()) 
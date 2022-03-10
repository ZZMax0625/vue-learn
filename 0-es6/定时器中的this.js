class Player{
    constructor (name,age){
        this.name = name
        this.age = age
    }


    // 这里使用匿名函数的方式会改变this的指向，变成了this
    toPrint(){
        setTimeout(function(){
            console.log(this.name + "-----------" + this.age)
        },1000)
    }


    // 解决1：使用变量存储
    // toPrint(){
    //     let _this = this
    //     setTimeout(function(){
    //         console.log(_this.name + "-----------" + _this.age)
    //     },1000)
    // }


    // 解决2：箭头函数方式不会改变this指向
    // toPrint(){
    //     setTimeout() => {
    //         console.log(this.name + "-----------" + this.age)
    //     },1000)
    // }
}

let player1 = new Player("aaa",22)
//这个时候在setTimeout中this是window对象
player1.toPrint()
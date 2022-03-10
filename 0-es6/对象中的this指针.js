class Player{
    constructor (name,age){
        this.name = name
        this.age = age
    }

    toPrint(){
        console.log(this.name + "-----------" + this.age)
    }
}
var player1 = new Player('qzk',20)
player1.toPrint();


// class NewPlayer extends Player{
//     constructor(name,age){
//         super(name,age)
//     }
// }
// var newPlayer = new NewPlayer('qzk',21);
// newPlayer.toPrint()
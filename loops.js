// for(let i=1;i<=100;i++){
    
//     if(i % 2 != 0){
//         console.log(i)
//     }
    
// }

// practice question 2

let gamenum = 25;

let usernumber = prompt("Guess the number");
while(usernumber != gamenum){
    usernumber = prompt("You Entered wrong number guess again")

}
console.log("congrats you guessed the correct number")
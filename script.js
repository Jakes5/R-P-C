const rpsList = document.querySelectorAll('.options');
const title = document.querySelector('.title');
const result = document.querySelector('.result');


let userInput = prompt("Choose R / P / S: ").toUpperCase();
const RPS = {
    "R": 0,
    "P": 1,
    "S": 2
}
let computerInput = Math.trunc(Math.random() * 3)

function matchRPC(match){
    let userInputNr = RPS[match];
    return getWinner(userInputNr, computerInput);
}

function mainGame(userChoice){
    let result;
    if(userChoice.length === 1){
        let regex = userChoice.match(/[RPS]/g);
        result = regex === null ? "Please refresh and try again" : matchRPC(userChoice)
    } else{
        result = "Only enter R, P or S";
    }

    return result;

}

function getWinner(user, comp){
    let calc = user - comp;
    if(calc === 0){
        return "It's a tie";
    } else if(calc === -2 || calc === 1){
        return "You win";
    } else{
        return "Computer wins";
    }
}





// console.log(computerInput);


// console.log(matchRPC(userInput));
console.log(mainGame(userInput));
// console.dir(document.querySelector('.result').firstElementChild)

/* Nodelist to Arry */
// console.log(Array.from(rpsList));
// rpsList.forEach(function(item, index, items){
//     console.log(item);
//     console.log(index);
//     // console.log(items);
// });


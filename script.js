let userInput = prompt("Choose R / P / C: ").toUpperCase();
const RPC = {
    "R": 0,
    "P": 1,
    "C": 2
}
let computerInput = Math.trunc(Math.random() * 3)

function matchRPC(match){
    let userInputNr = RPC[match];
    return getWinner(userInputNr, computerInput);
}

function mainGame(userChoice){
    let result;
    if(userChoice.length === 1){
        let regex = userChoice.match(/[RPC]/g);
        result = regex === null ? "Please refresh and try again" : matchRPC(userChoice)
    } else{
        result = "Only enter R, P or C";
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

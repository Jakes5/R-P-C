let userInput = prompt("Choose R / P / C: ").toUpperCase();

function matchRPC(match){
    let userInputNr = RPC[match];
    return winner(userInputNr, computerInput);
}

function ValidChar(char){
    let output;
    if(char.length === 1){
        let regex = char.match(/[RPC]/g);
        output = regex === null ? "Please refresh and try again" : matchRPC(char)
    } else{
        output = "Only enter R, P or C";
    }

    return output;

}

function winner(user, comp){
    let calc = user - comp;
    if(calc === 0){
        return "It's a tie";
    } else if(calc === -2 || calc === 1){
        return "You win";
    } else{
        return "Computer wins";
    }
}



const RPC = {
    "R": 0,
    "P": 1,
    "C": 2
}

let computerInput = Math.trunc(Math.random() * 3)

// console.log(computerInput);


// console.log(matchRPC(userInput));
console.log(ValidChar(userInput));

const main = document.querySelector('.main');
const result = document.querySelector('.result');
const message = document.querySelector('.message');
const userScoreDisplay = document.querySelector('.user-score');
const compScoreDisplay = document.querySelector('.comp-score');
const rpsBtns = document.querySelectorAll('.rps-btn');
const reset = document.querySelector('.reset');

let computerInput, computerScore = 0, userScore = 0;

const RPS = {
    0 : "Rock",
    1 : "Paper",
    2 : "Scissors"
 }

 function getWinner(user, comp){
    let calc = user - comp;  
    if(calc === 0){
        return `Both picked ${RPS[calc]}. It's a tie!!!`;
    } else if(calc === -2 || calc === 1){
        userScore += 1;
        return `${RPS[user]} beats ${RPS[comp]}. You win the round!`;
    } else{
        computerScore += 1;
        return `${RPS[comp]} beats ${RPS[user]}. Computer wins the round!`;
    }
}

function overallWinner(){
    if(computerScore === 5){
        return `COMPUTER WINS!`
    } else{

    }
}

function resetAll(){
    computerScore = 0, userScore = 0, userScoreDisplay.innerHTML = 0, compScoreDisplay.innerHTML = 0, message.innerHTML = "";
    result.classList.toggle("hide");
    main.classList.toggle("hide");
    reset.classList.toggle("hide");
}

function gameEnd(){
    computerScore = 0, userScore = 0;
    result.classList.toggle("hide");
    main.classList.toggle("hide");
    reset.classList.toggle("hide");
};

for(let btn = 0; btn < rpsBtns.length; btn++){
    rpsBtns[btn].addEventListener("click",() =>{
        computerInput = Math.trunc(Math.random() * 3)
        // console.log(`Computer selected ${computerInput}`);
        // console.log(`you selected ${btn}`);
        let winner = getWinner(btn, computerInput);
        if(userScore === 5){
            message.innerHTML = "You are the winner";
            gameEnd();
        } else if(computerScore === 5){
            message.innerHTML = "Computer is the winner";
            gameEnd();
        }else{
            message.innerHTML = winner;
            userScoreDisplay.innerHTML = userScore;
            compScoreDisplay.innerHTML = computerScore;
            console.log(computerScore, userScore);
        }


});
}; 

reset.addEventListener('click', resetAll);
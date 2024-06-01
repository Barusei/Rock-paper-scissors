let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_P = document.querySelector(".result > P");
const rock_button = document.getElementById("r");
const paper_button = document.getElementById("p");
const scissors_button = document.getElementById("s");

function computerchoice(){
    const choices = ['r', 'p', 's'];
    const randomN = Math.floor(Math.random() * 3);
    return choices[randomN];
}

function convertToWord(letter){
    if(letter ==='r') return 'Rock';
    if(letter ==='p')return 'Paper';
    return 'scissors';
}

function win(userchoice, compChoice){
    userScore++
    userScore_span.innerText = userScore
    result_P.innerText = `${convertToWord(userchoice)} covers ${convertToWord(compChoice)}. You win!`;
}


function lose(userchoice, compChoice){
    computerScore++
    computerScore_span.innerText = computerScore
    result_P.innerText = `${convertToWord(compChoice)} covers ${convertToWord(userchoice)}. You lose!`;
}

function draw(userchoice, compChoice){
    result_P.innerText = `${convertToWord(userchoice)} equals ${convertToWord(compChoice)}. it's a Draw!`;
}
function game(userchoice){
   const compChoice = computerchoice();
   switch (userchoice + compChoice){
      case "rs":
      case "sp":
      case "pr":
        win(userchoice, compChoice);
        break;
      case "rp":
      case "ps":
      case "sr":
        lose(userchoice, compChoice);
        break;
      case "rr":
      case "pp":
      case "ss":
        draw(userchoice, compChoice);
        break;
   }   
}

rock_button.addEventListener('click', () => {
    game("r");
})

paper_button.addEventListener('click', () => {
    game("p");
})

scissors_button.addEventListener('click', () => {
    game("s");
})
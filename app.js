let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
//we are telling them its in a span tag and its id
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
//till now we have cashed the DOM basically storing all these variables so that we can use them later
//not writing them again fully like document.getelementbyId


function getComputerChoice(){
  const choices= ['r','p','s'];
  const randomNumber= Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function convertToWord(letter)
{
  if( letter === "r")return "Rock";
  if( letter === "p")return "Paper";
  else return "Scissors";
}

function win(userChoice, computerChoice){
  const smallUserWord ="(user)".fontsize(3).sub();
  const smallCompWord ="(comp)".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!😎`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},800);
  userScore++;
  userScore_span.innerHTML= userScore;
  computerScore_span.innerHTML= computerScore;
}

function lose(userChoice, computerChoice){

  const smallUserWord ="(user)".fontsize(3).sub();
  const smallCompWord ="(comp)".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You lose!☹️`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},800);
  computerScore++;
  userScore_span.innerHTML= userScore;
  computerScore_span.innerHTML= computerScore;
}
function draw(userChoice, computerChoice){
  const smallUserWord ="(user)".fontsize(3).sub();
  const smallCompWord ="(comp)".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} draws ${convertToWord(computerChoice)}${smallCompWord}. Its a draw!🤝`;
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')},800);
}
function game(userChoice){
  const computerChoice= getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}
function main(){
  rock_div.addEventListener('click',function(){
    game("r");
  })
  paper_div.addEventListener('click',function(){
    game("p");
  })
  scissors_div.addEventListener('click',function(){
    game("s");
  })
}
main();

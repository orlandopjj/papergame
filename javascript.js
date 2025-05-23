
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 100);
    if(choice<=33){
        return "rock";
    } else if(choice>33 && choice<=66){
        return "paper";
    } else{
        return "scissors";
    }
}

//console.log(getComputerChoice());

function getHumanChoice(){
    let humanchoice = prompt("Rock, Paper or Scissors?");
    return humanchoice;
}

//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playGame(){
    
    function playRound(humanChoice, computerChoice){
        if(humanChoice === "rock" && computerChoice === "paper"){
            computerScore++;
            return "You Lose! Paper beats Rock";
        } else if(humanChoice === "paper" && computerChoice === "rock"){
            humanScore++;
            return "You Win! Paper beats Rock";
        } else if(humanChoice === "scissors" && computerChoice === "paper"){
            humanScore++;
            return "You Win! Scissors beats Paper";
        } else if(humanChoice === "rock" && computerChoice === "scissors"){
            humanScore++;
            return "You Win! Rock beats Scissors";
        } else if(humanChoice === "paper" && computerChoice === "scissors"){
            computerScore++;
            return "You Lose! Scissors beats Paper";
        } else if(humanChoice === "scissors" && computerChoice === "rock"){
            computerScore++;
            return "You Lose! Rock beats Scissors";
        } else if(humanChoice=== computerChoice){
            humanScore+=0;
            computerScore+=0;
            return "Draw";
        }
        }
        
      
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
       
      
        console.log(playRound(humanSelection, computerSelection));
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        
        
    
}
 



for(let i=1;i<=5;i++){
    console.log(playGame());
    if(i===5){
        if(humanScore>computerScore){
            console.log("Human wins!");
        } else if(humanScore<computerScore){
            console.log("Computer wins!");
        } else{
            console.log("Draw");
        }
    }
}
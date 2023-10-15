
function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    const choice = choices[Math.floor(Math.random()*Text.length)];
    alert("The choice is: " + choice)
}



function playRound(playerSelection, computerSelection) {
    if (computerSelection===playerSelection) {
        console.log("Draw")
    } else if (computerSelection==="Paper" && playerSelection === "Scissors"){
        console.log("Computer lost") 
    }
            else if (computerSelection==="Paper" && playerSelection === "Rock") {
                console.log("Computer won")
            } else if (computerSelection==="Scissors" && playerSelection === "Rock") {
                console.log("Computer lost")
            } else if (computerSelection==="Scissors" && playerSelection === "Paper") {
                console.log("Computer won")
            } else if (computerSelection==="Rock" && playerSelection === "Scissors") {
                console.log("Computer won") 
            } else if (computerSelection==="Rock" && playerSelection === "Paper") {
                console.log("Computer lost")
            }
        }
        const playerSelection = prompt("Rock, Paper or Scissors?")
        const computerSelection  = getComputerChoice()
       
   console.log(playRound(playerSelection,computerSelection))
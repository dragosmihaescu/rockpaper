let computerPoints = 0;
let playerPoints = 0;
let result = 0;

   const choices = ['Rock', 'Paper', 'Scissors'];
   const choice = choices[Math.floor(Math.random() * choices.length)]
   console.log(choice)



 function playRound(playerSelection, computerSelection) {
         if ((playerSelection === computerSelection )) {
                console.log('Draw')
         } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') || (playerSelection === 'Scissors' && computerSelection === 'Rock') || (playerSelection === 'Paper' && computerSelection === 'Scissors')) {
                computerPoints++;
                console.log('Computer won. He has ' + computerPoints + ' Points')
         } else {
                playerPoints++
                console.log('Player won. You have ' + playerPoints + ' Points')
   }
}
        
        const playerSelection = prompt('Rock, Paper or Scissors?')
        const computerSelection  = choice
        console.log(playRound(playerSelection, computerSelection))
        
   

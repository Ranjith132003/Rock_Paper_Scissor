document.addEventListener('DOMContentLoaded', () => {
    outcomeDisplay = document.getElementById('outcome');

   document.getElementById('rock').addEventListener('click', () => playGame('rock'));
   document.getElementById('paper').addEventListener('click', () => playGame('paper'));
   document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

   const choices = ['rock', 'paper', 'scissors'];

   function getComputerChoice() {
        randomIndex = Math.floor(Math.random() * choices.length);
       return choices[randomIndex];
   }

   function playGame(userChoice) {
        computerChoice = getComputerChoice();
        outcomeDisplay.textContent= determineWinner(userChoice, computerChoice);
       
   }

   function determineWinner(userChoice, computerChoice) {
       if (userChoice === computerChoice) {
           return 'It\'s a draw!';
       }
       if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper'))
            {
              return 'You win!';
            }
       return 'Computer wins!';
   }
});
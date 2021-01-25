function computerPlay () {
//randomly return Rock or Paper or Scissors
const shout = ['Rock', 'Paper', 'Scissors'];
const random = Math.floor(Math.random() * shout.length);

    console.log(random, shout[random]);
}
    computerPlay()
    
// function game (){
// function playRound(playerSelection, computerSelection) {
//     // your code here!
//   }
// }


//   const playerSelection = "rock";
//   const computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection));
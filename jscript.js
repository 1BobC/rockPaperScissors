//function expression to randomly return Rock or Paper or Scissors
let computerPlay = function() {
  const shout = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * shout.length);
      return (random, shout[random]);
  } 
  //function expression to pay one round of rock, paper, scissors
    let playRound = function () {  
      const playerSelection = 'rock';
      const computerSelection = computerPlay();
      console.log("The player selection is: " + playerSelection, "The computer selection is: " + computerSelection);  
      if (playerSelection == 'rock' && (computerSelection == 'rock' || computerSelection == 'scissors')){
        console.log("The player wins!");
    }else if(playerSelection == 'rock' && computerSelection == 'paper'){
        console.log("The computer wins!");
    }
    } 
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

//pause for function practise
//MDN functions, reusable blocks of code


// function myBigFunction() {
//     let myValue;
  
//     subFunction1();
//     subFunction2();
//     subFunction3();
//   }
  
//   function subFunction1() {
//     console.log(myValue);
//   }
  
//   function subFunction2() {
//     console.log(myValue);
//   }
  
//   function subFunction3() {
//     console.log(myValue);
//   }

// myBigFunction();     //does not work, ReferenceError: myValue is not defined
//                        pass the value into the function as a parameter, like this:

// let playRound = function() {             
// //function myBigFunction() {       
//     let playerSelection = computerPlay();//'rock';
//     let computerSelection = computerPlay();   
    
// player1(playerSelection);  
//     //subFunction1(playerSelection);
// player2(computerSelection);
//     //subFunction2(computerSelection);
   
//   }
//     function player1(value) {  
//   //function subFunction1(value) {
//     //console.log(value);
//     return(value);
//   }
//     function player2(value) {
//   //function subFunction2(value) {
//     //console.log(value);
//     return(value);
//   }

//     playRound();
//     console.log(playRound(player1(), player2()));
    
//     //myBigFunction();





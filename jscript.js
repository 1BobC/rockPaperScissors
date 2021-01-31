const computerPlay = function() {
//randomly return Rock or Paper or Scissors
const shout = ['rock', 'paper', 'scissors'];
const random = Math.floor(Math.random() * shout.length);
    console.log(random, shout[random]);
};

computerSelection = computerPlay(); 
 console.log(computerSelection); 

//const playerSelection = "rock";
// function playRound(playerSelection, computerSelection) {
//     // your code here!
//     if(computerSelection = "paper"){
//     return("You Lose! Paper beats Rock");
//     }
//   }
  
  
  
//   console.log(playRound(playerSelection, computerSelection));
  
    

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

// function computerPlay () {
// //randomly return Rock or Paper or Scissors
// const shout = ['rock', 'paper', 'scissors'];
// const random = Math.floor(Math.random() * shout.length);
//     console.log(random, shout[random]);
// }
// computerPlay();

              
// function myBigFunction() {       
//     let playerSelection = 'rock';
//     let computerSelection = computerPlay();   
//     let theirValue = 3;
  
//     subFunction1(playerSelection);
//     subFunction2(computerSelection);
//     subFunction3(theirValue);
//   }
  
//   function subFunction1(value) {
//     console.log(value);
//   }
  
//   function subFunction2(value) {
//     console.log(value);
//   }
  
//   function subFunction3(value) {
//     console.log(value);
//   }

//   myBigFunction();

//the basic function
//function displayMessage(){
    
//}

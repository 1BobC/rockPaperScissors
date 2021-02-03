// const computerPlay = function() {
// //randomly return Rock or Paper or Scissors
// const shout = ['rock', 'paper', 'scissors'];
// const random = Math.floor(Math.random() * shout.length);
    
//     //console.log(random, shout[random]);
//     return;
// };

    


//     const playerSelection = computerPlay();
//     const computerSelection = computerPlay;
// // function playRound(playerSelection, computerSelection) {
// //     // your code here!
  
// //     } 
//    console.log(playRound(playerSelection, computerSelection));
  
    

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

function computerPlay () {
//randomly return Rock or Paper or Scissors
const shout = ['rock', 'paper', 'scissors'];
const random = Math.floor(Math.random() * shout.length);
    //console.log(random, shout[random]);
    return (random, shout[random]);
}
//computerPlay();

let playRound = function() {             
//function myBigFunction() {       
    let playerSelection = computerPlay();//'rock';
    let computerSelection = computerPlay();   
    
player1(playerSelection);  
    //subFunction1(playerSelection);
player2(computerSelection);
    //subFunction2(computerSelection);
   
  }
    function player1(value) {  
  //function subFunction1(value) {
    //console.log(value);
    return(value);
  }
    function player2(value) {
  //function subFunction2(value) {
    //console.log(value);
    return(value);
  }

    playRound();
    console.log(playRound(player1(), player2()));
    
    //myBigFunction();

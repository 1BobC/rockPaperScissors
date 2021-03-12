//can I find radio buttons and which one selected?
//step 1
// const form= document.querySelector('form');     
// form.addEventListener('click', e => { 
//     console.log(e, 'you checked a button');
// });

//step 2  this doesn't work maybe wrong approach!!

// let playerPlay= function(value) {
// const items= document.querySelectorAll("input", value);
// items.forEach(item => {
//     item.addEventListener(("click", myFunction) {   
//       function myFunction() {
//         var value = document.getElementById("").value;
//         console.log(value);
//       }
// });       
// });       
// }     
// playerPlay(value);

//step 2 again
// let playerPlay= function(){
// const items= document.getElementsByName("choice")
//       .forEach(radio => {
//           if(radio.checked) {
//             console.log(radio.value);
//           }
//       });
//     }
//     playerPlay();

//or a shorter step2 
let playerPlay= function(){

const results= input.addEventListener('click', e => { 
const result= document.querySelector('input[name= "choice"]:checked').value;
console.log(result);
});
}
playerPlay();
//function expression to randomly return Rock or Paper or Scissors
// let computerPlay = function() {
//   const shout = ['rock', 'paper', 'scissors'];
//   const random = Math.floor(Math.random() * shout.length);
//       return (random, shout[random]);
//   } 
//   //function expression to play one round of rock, paper, scissors
//     let playRound = function () {  
//       const playerSelection = playerPlay();
//       const computerSelection = computerPlay();
//       console.log("The player selection is: " + playerSelection, "The computer selection is: " + computerSelection);  
//       if (playerSelection == 'rock' && (computerSelection == 'rock' || computerSelection == 'scissors')){
//         console.log("The player wins!");
//     }else{//if(playerSelection == 'rock' && computerSelection == 'paper'){
//         console.log("The computer wins!");
//     }
//     } 
//     playRound();
    // playRound();
    // playRound();
    // playRound();
    // playRound();

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
                       //pass the value into the function as a parameter, like this:

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
    
    //myBigFunction();





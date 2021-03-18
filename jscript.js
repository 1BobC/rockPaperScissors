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
// let playerPlay= function(){

// const results= input.addEventListener('click', e => { 
// const result= document.querySelector('input[name= "choice"]:checked').value;
// console.log(result);
// });
// }
//playerPlay();
//function expression to randomly return Rock or Paper or Scissors
let computerPlay = function() {
  const shout = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * shout.length);
      return (random, shout[random]);
  } 
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







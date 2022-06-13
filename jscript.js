//Earlier coding shifted down, TOP guidence used for this code

 //function playRound(playerSelection, computerSelection) {
//     // your code here!
//const playerSelection = "rock";


let playerPlay = function () {
    let sign = prompt("Enter rock, paper or scissors: ");
    
    if (sign.toLowerCase() == "rock") {
        return "rock";
    }
    else{if (sign.toLowerCase() == "paper") {
        return "paper";
    }
    }
    return "scissors";
    }

let computerPlay = function() {
    const shout = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * shout.length);
        return (random, shout[random]);
    } 

    
//function expression to play one round of rock, paper, scissors
    let playRound = function () {  
      const playerSelection = playerPlay();
      const computerSelection = computerPlay();
      
      console.log("The player selection is: " + playerSelection, "The computer selection is: " + computerSelection);  
      if (playerSelection == 'rock' && (computerSelection == 'rock' || computerSelection == 'scissors')){
        console.log("The player wins!");
    }else{if(playerSelection == 'rock' && computerSelection == 'paper'){    
        console.log("The computer wins!");
    }
     
    else{if(playerSelection == 'paper' && (computerSelection == 'paper' || computerSelection == 'rock')){    
        console.log("The player wins!");
    }
    else{if(playerSelection == 'paper' && computerSelection == 'scissors'){    
        console.log("The computer wins!");
    }

    else{if(playerSelection == 'scissors' && (computerSelection == 'scissors' || computerSelection == 'paper')){    
        console.log("The player wins!");
    } 
    else{if(playerSelection == 'scissors' && computerSelection == 'rock'){    
        console.log("The computer wins!");
    }   
    } 
    }
    }
    }   
    } 
}

    let game = function(){
        for (let i = 0; i < 5; i++) {
            // your code here!
            playRound()
            //console.log(i);
         }
    }
        game();
    //playRound();
    // playRound();
    // playRound();
    // playRound();
    // playRound();
  
  
  //const playerSelection = "rock";
  //const computerSelection = computerPlay();
  //console.log(playRound(playerSelection, computerSelection));
  
//   let sign = prompt("What's your sign?");

// if (sign.toLowerCase() == "scorpio") {
//   alert("Wow! I'm a Scorpio too!");
//   }


// console.log("Are you really?")












// Earlier Coding Starts Here
//can I find radio buttons and which one selected?
//step 1
// const form= document.querySelector('form');     
// form.addEventListener('click', e => { 
//     console.log(e, 'you checked a button');

// });

//step 2  this doesn't work maybe wrong approach!!

// let playerPlay= function(value) {
// const items= document.querySelectorAll("input", value);
// }
// items.forEach(item => {
//     item.addEventListener("click", myFunction) ; 
//       function myFunction() {
//         var value = document.getElementById("").value;
//         console.log(value);
//         return value;
//       }
// });
      
 
     
    
//playerPlay();

//step 2 again
// let playerPlay= function(){
// const items= document.getElementsByName("choice")
//       .forEach(radio => {
//           if(radio.checked) {paper
//     }
//     playerPlay();

//or a shorter step2 
// let playerPlay= function(){

// const results= input.addEventListener('click', e => { 
// const result= document.querySelector('input[name= "choice"]:checked').value;
// console.log(result);
// });
// }
// playerPlay();
//let sign = prompt("What's your sign?");

//function expression to randomly return Rock or Paper or Scissors
// let computerPlay = function() {
//   const shout = ['rock', 'paper', 'scissors'];
//   const random = Math.floor(Math.random() * shout.length);
//       return (random, shout[random]);
//   } 

//   let playerPlay = function() {
//     const shout = 'rock';          //['rock', 'paper', 'scissors'];
//     // const random = Math.floor(Math.random() * shout.length);
//          return  'rock' ;       //(random, shout[random]);  
//   }

//   //function expression to play one round of rock, paper, scissors
//     let playRound = function () {  
//       const playerSelection = playerPlay();
//       const computerSelection = computerPlay();
//       console.log("The player selection is: " + playerSelection, "The computer selection is: " + computerSelection);  
//       if (playerSelection == 'rock' && (computerSelection == 'rock' || computerSelection == 'scissors')){
//         console.log("The player wins!");
//     }else{if(playerSelection == 'rock' && computerSelection == 'paper'){
//         console.log("The computer wins!");
//     }
//     } 

//   }
//     playRound();
//     playRound();
//     playRound();
//     playRound();
//     playRound();






# rockPaperScissors
project to code for rockPaperScissors game.

Introduction

We’re going to make a simple implementation of grade-school classic “rock paper scissors”. If you don’t know what that is check the Wikipedia article or this ridiculous step-by-step. For the moment we’re just going to play the game from the browser console, but we will revisit it and add a front end later so don’t forget to keep the code on GitHub! You might notice some ‘view in browser’ links in the student solutions - this is coming in a later lesson. When you get there don’t forget to come back and add your link!
Assignment

    Start a new Git repo for your project.
    Create a blank HTML document with a script tag. This game is going to be played completely from the console, so don’t worry about putting anything else in there.
    Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

  This blog information enabled me to create random selector function:
    (  const randomElement = array[Math.floor(Math.random() * array.length)]; 
    const months = ["January", "February", "March", "April", "May", "June", "July"];
    const random = Math.floor(Math.random() * months.length);
    console.log(random, months random in sq brkts);   )

    "Create function that randomly returns Rock or Paper or Scissor"

    Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
        Make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)

    Important note: you want to return the results of this function call, not console.log() them. To test this function console.log the results:

    function playRound(playerSelection, computerSelection) {
      // your code here!
    }

    const playerSelection = "rock";
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

    You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
    At this point you should be using console.log() to display the results of each round and the winner at the end.
    Use prompt() to get input from the user. Read the docs here if you need to.
    Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
    Feel free to create more “helper” functions if you think it would be useful.


"Create repo with README.md and create index.html jscript.js and style.CSS Add project instructions to README.md ready for creating pseudo code"

1 playerSelection = 'rock'
computerSelection = randomSelection 'rock'
player wins

2 playerSelection = 'rock'
computerSelection = randomSelection 'paper'
player loses

3 playerSelection = 'rock'
computerSelection = randomSelection 'scissors'
player wins

"Pause for revision of functions returning a value in order to provide global scope This to solve the problem of accessing values for computerSelection Will then rework and clean up the code in jscript.js At present it is messy" 

"Create indexC.html and jscriptC.js for revision exercises of function with return call" 

"Completed function return exercises on Ninja Udemy, MDN and javscript information as on indexC.html"

"Completed code for one round of rock, paper, scissors in files index.html and jscript.js"
"Still working on creating playerChoice from radio buttons"
"Removed function revision Create new folder for function revision see the six ns_* folders"

"4Jun22 Revise the function return exercises ninja 1 & 2, MDN 1"
"Add form to insert radius ninja 2 excercise"
"Add form to insert width and height to MDN Ubung 1"
"Add animated counter to MDN Ubng 2 counter"
"Add cheer word to DOM to MDN Ubung 3, add message and outer variable to DOM to javascriptinfo Functions Ubung 2 and 3"
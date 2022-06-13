//ninja Ubung 1 nicht arbeit 
// const calcArea = function(radius) {
//     let area = 3.14 * radius**2;
//     console.log(area);
// }
//     calcArea(5);         //can be called but not used
//     console.log(area);  //cannot be used outside the function because area is a 
                            //locable variable accessible only within the function
    //document.getElementById("finn1").innerHtml = area;

//ninja Ubung 2 ist OK
//Can I create form code for radius input ?

// const calcArea = function(radius) {
//     let area = 3.14 * radius**2;
//     return area;
// }
//     const x = calcArea(5);
//     console.log (x);
//     document.getElementById("finn2").innerHTML = "Area is: " + x;

// const btn = document.getElementById('btn');
// const calc = document.getElementById('calc');

// function area() {
//     const radius = parseInt(document.getElementById('radius').value);
//     //const height = parseInt(document.getElementById('height').value);
//     const result = document.getElementById('result');

//     if (radius !== NaN) {
//         //let area = base/2 * height;
//         let area = 3.14 * radius**2;
//         result.value = area;
//         return false;

//         } else {
//         alert("Enter Valid Number");
//         }
//     }   
//     calc.addEventListener('click', () => {
//         area();
//       });
//       btn.addEventListener('click', () => {
//         radius.value = " ";
//         //height.value = " ";
//         result.value = " ";
//       });

//MDN Ubung 1 funkionert gut und so kann ich experimentiere ein bischen
//Und jetzt kann ich eine Eingabe formular für Breite und Höhe erstellen? 

// function getRectArea(width, height) {
//     if( width > 0 && height > 0){
//         return width * height;
//     }
//     return 0;    
// }    
//     console.log(getRectArea(3,4));
//     document.getElementById("finn3").innerHTML = "Area is: " + (getRectArea(3,4));
//     console.log(getRectArea(-3,4));
//     document.getElementById("finn4").innerHTML = "Area is: " + (getRectArea(-3,4));
//     console.log(getRectArea(53,54));
//     document.getElementById("finn5").innerHTML = "Area is: " + (getRectArea(53,54));
    
    
//     const btn = document.getElementById('btn');
//     const calc = document.getElementById('calc');
    
//     function area() {
//         const width = parseInt(document.getElementById('width').value);
//         const height = parseInt(document.getElementById('height').value);
//         const result = document.getElementById('result');
    
//         if (width && height !== NaN) {
//             let area = width * height;
//             result.value = area;
//             return false;
    
//             } else {const calc = document.getElementById('calc');
//             alert("Enter Valid Number");
//             }
//         }   
//         calc.addEventListener('click', () => {
//             area();
//           });
//           btn.addEventListener('click', () => {
//             width.value = " ";
//             height.value = " ";
//             result.value = " ";
//           });




    //MDN Ubung 2 function stops at the point return is called
    //using www.geeksforgeeks.org/how-to-make-animated-counter-using-javascript/
//     let counts=setInterval(updated);
// function updated() {
//     for (let count = 1; ; count++) { //beware infinite loop
//         console.log(count + "A");      // up to 5
//         document.getElementById("counter").innerHTML = (count + "A"); //added from Geeks code
//             if( count === 5) {
//                 return;
//             }
//             {
//              clearInterval(counts);
//             }
        
//             console.log(count + "B");  //up to 4 then A count 5
//     }
//             //tried return here and infinite loop kicked in!!!
//             console.log(count + "C");   //but C is untouchable
// }
//                 updated ();

//Using www.geeksforgeeks.org/how-to-make-animated-counter-using-javascript/
// let counts=setInterval(updated);
//         let upto=0;
//         function updated(){
//             let count= document.getElementById("counter");            
//             count.innerHTML=++upto;
//             if(upto===1000)            
//             {
//                 clearInterval(counts);
//             }
//             console.log(upto);       //added simply to see if it worked
//         }


//MDN Ubung 3 syntax error return not in function 
//can be looked up in MDN under this heading
//     const cheer = function(score) {   //tried let and const instead of var - worked ok
//         if (score === 23) {        //apparently easy to miss a curly brace 
//         //return 'Maximum';
//         return 'Mmmm...';
//     }//; 
//         if(score === 100) {
//         return 'Century!';
//     }
//     console.log(cheer(23));
//     document.getElementById("finn7").innerHTML = (cheer(23));
//     console.log(cheer(100));
//     document.getElementById("finn8").innerHTML = (cheer(100));
// };
//         cheer();
//         cheer();
//         cheer();



//javascript.info Functions Ubung 1
//function showMessage() {
//     alert('Hello everyone!');
// }
//     showMessage();
//     showMessage();


//javascript.info Functions Ubung 2
//         let negation = ' No, you are not!';
// function showMessage() {
//     let message = "Hi, I'm javascript!" + negation;    //local variable
//     alert(message);

//      console.log(message);
//      document.getElementById("finn9").innerHTML = message;
    
// }
//     showMessage();  //this one works
//     alert(message); //error variable is local to the function


//javascriptinfo Functions Ubung 3 function access to outer variable
//     let userName = 'John';      //the function has access to this outer variable
// function showMessage() {
//     let message = "Hello, " + userName;
//     console.log(message);
//     alert(message);
//     document.getElementById("finn10").innerHTML = message;
// }
//     showMessage();  //Hello John plus window Hello John

//javascriptinfo Functions Ubung 4 function can change outer variable
//Add form to enter outer variable:
        const btn = document.getElementById('btn');
        const userName = document.getElementById('userName');
        //let userName = 'John';       //global variable not recommended
    function showMessage() {
            userName = 'Bob';       //changes outer variable declararion
            let message = "Hello, " + userName;
            console.log(message);
     }
     userName.addEventListener('click', () => {
                showMessage();
              });
              btn.addEventListener('click', () => {
                userName.value = " ";
                //height.value = " ";
                //result.value = " ";
              });
//         //alert(userName);
         console.log(userName);          //displays outer variable name John
           document.getElementById("finn11").innerHTML = "Global variable name is: " + userName;  
        showMessage();                  //function call
//         //alert(userName);
         console.log(userName);          //function changes outer variable name to Bob
           document.getElementById("finn12").innerHTML = "Function variable name is: " + userName;

//javascriptinfo Functions Ubung 5 declaring a variable outside and inside the function
        //         let userName = 'John';     //global variable not recommended
        // function showMessage() {
        //         let userName = 'Bob';     //declares new variable inside function
        //         let message = "Hello, " + userName;
        //         console.log(message);
        // }
        //         showMessage();            //uses variable declared inside function             
        //         console.log(userName);    //

//javascriptinfo Functions Ubung 6 Parameters 1 & 2 arbitary data
        // function showMessage(from, text) {
        //         console.log(from + ': ' + text);
        // }
        // showMessage('Ann', "Hello!");           //the values provided here are copied back into the
        // showMessage('Harry', "What's up!");     //local variables and then used by the function

        // function showMessage(from, text){
        //         from = "*" + from + "*";
        //         console.log(from + ' : ' + text);
        // }
        //         let from = "Ann";
        //         showMessage(from, "Hello");            //message as expected!
        //         console.log(from);                     //message form variable declaration

//javascriptinfo Functions Ubung 7 Parameter default values 1 to 4 includes one return function
//         function showMessage(from, text){
//         from = "*" + from + "*";
//         console.log(from + ' : ' + text);
// }
//         let from = "Ann";
//         showMessage("Ann");     //function called with only one arguement
                                //displays *Ann* : undefined

        // function showMessage(from, text = 'no text provided') {
        //         console.log(from + " : " + text);
        // }
        //         //showMessage("Anne", "Hello!");
        //         showMessage("Anne");
        
// function anotherFunction() {
//         let another = 'this string';
        //console.log(another);
//         return(another);                        //at last !!!!!!!!!!!!
// }
//         console.log(anotherFunction());
        
//         function showMessage(from, text = anotherFunction()){
//         anotherFunction executed if no text arguement provided
//         and it's result becomes the text arguement
        //         console.log(from + " : " + text);
        // }
                //showMessage("bob", "june");
//                showMessage("bob");             //displays bob + this string !!!!!!!!!!!

                // function showMessage(text) {
                //
                // if(text === undefined) {
                //    text = 'empty message';     
                // }
                //    console.log(text);
                // }
                //    //showMessage("A message");
                //    showMessage();               //empty message

//javascriptinfo Functions Ubung 8 Return Functions 1 to 5
        // function sum(a, b) {                 //function declaration
        // const sum = function(a, b) {         //function expression
        //         return a + b;
        // }
        //         let result = sum(23, 27);
        //         console.log(result + 50 + ' is the answer');

        // function checkAge(age) {             //function declaration 
        // const checkAge = function(age) {    //function expression
        // if(age >= 18) {
        //         return true;
        // }else{
        //         return confirm("Do you have permission from your parents?");
        // }
        // };
        // let age = prompt("How old are you?", 18);
        // if(checkAge(age)) {
        //         console.log("Access granted");
        // }else{
        //         console.log("Access denied");
        // };

        // function showMovie(age) {                    this is for illustration only
        // //let showMovie = function(age) {
        // if(!checkAge(age)) {
        //         return;
        // }        
        //         alert("your movie starts now!");
        //}

        



        
                       



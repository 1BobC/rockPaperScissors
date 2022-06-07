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
    
    
    const btn = document.getElementById('btn');
    const calc = document.getElementById('calc');
    
    function area() {
        const width = parseInt(document.getElementById('width').value);
        const height = parseInt(document.getElementById('height').value);
        const result = document.getElementById('result');
    
        if (width && height !== NaN) {
            let area = width * height;
            result.value = area;
            return false;
    
            } else {
            alert("Enter Valid Number");
            }
        }   
        calc.addEventListener('click', () => {
            area();
          });
          btn.addEventListener('click', () => {
            width.value = " ";
            height.value = " ";
            result.value = " ";
          });




    //MDN Ubung 2 function stops at the point return is called
// function counter() {
//     for (var count = 1; ; count++) { //beware infinite loop
//         console.log(count + "A");      // up to 5
//             if( count === 5) {
//                 return;
//             }
//             console.log(count + "B");  //up to 4 then A reaches 5
//     }
//             //tried return here and infinite loop kicked in!!!
//             console.log(count + "C");   //but never reaches C
// }
//         counter ();

//MDN Ubung 3 syntax error return not in function 
//can be looke up in MDN nder this heading
//     const cheer = function(score) {   //tried let and const instead of var - worked ok
//         if (score === 147) {        //apparently easy to miss a curly brace 
//         return 'Maximum';
//     }//; 
//         if(score === 100) {
//         return 'Century!';
//     }
//     console.log(cheer(147));
//     console.log(cheer(100));
// };
//         cheer();
        // cheer();
        // cheer();

//javascript.info Functions Ubung 1
//function showMessage() {
//     alert('Hello everyone!');
// }
//     showMessage();
//     showMessage();

//javascript.info Functions Ubung 2
// function showMessage() {
//     let message = "Hi, I'm javascript!";    //local variable
//     //alert(message);
//      console.log(message);
// }
//     showMessage();  //this one works
//     alert(message); //error variable is local to the function

//javascriptinfo Functions Ubung 3 function access to outer variable
//     let userName = 'John';      //the function has access to this outer variable
// function showMessage() {
//     let message = "Hello, " + userName;
//     console.log(message);
//     alert(message);
// }
//     showMessage();  //Hello John plus window Hello John

//javascriptinfo Functions Ubung 4 function can change outer variable
//         let userName = 'John';       //global variable not recommended
//     function showMessage() {
//             userName = 'Bob';       //changes outer variable declararion
//             let message = "Hello, " + userName;
//             console.log(message);
//     }
//         //alert(userName);
//         console.log(userName);          //displays outer variable name John
//         showMessage();                  //function uses changed variable Bob
//         //alert(userName);
//         console.log(userName);          //function changes outer variable name to Bob

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

        



        
                       



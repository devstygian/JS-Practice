/*console.log('Hello world');
console.log('This is my first javascript program');

window.alert("Hacker ahead!")

// NOte: The comment are semilar in Java and CSS

// this is one line comment

/*
    this is for multiple line comment
*/



//day 1 of learnnig basic of JS
/**
 * Notes:
 * A variabole is a contaner for storing data
 * A variable behaves as if was the value that is contains 
 * 
 * Two steps:
 * 1. Decleration (var, let, const)
 * 2. Assignment (= assignment operation)
 * 
 * My Note:
 * strings, numbers, booleans are data types
 *
let fisetName="Mark";//strings
let age = 20;//numbers
age = age+1;
let student = true;//booleans


console.log("Hello",fisetName,"!")
console.log("This is your age now!",age,"years old");
console.log("Enrolled",student);

document.getElementById("p1").innerHTML = "Hello " + fisetName;
document.getElementById("p2").innerHTML = "Your age is " + age+ 'years old!';
document.getElementById('p3').innerHTML = "Enrolled " + student+ "!"
*/



// Day 1 Arithmetic Topic
/**
 * Arithmetic expression is combination of...
 * operands (value, variable, etc,)
 * operatator(+, -, /, *, %)
 * that can be evaluated to a value
 * ex. y = x + 5;
 */

/*
let age=19;

age +=1;
age -=1;
age *=2;
age %=3;

console.log(age)
/*
    Operator precedence
    1. parenthesis ()
    2. exponints
    3. multuplication & divition
    4. addition & subtraction


let result = 1+2*(3+4);

console.log(result);
*/


//________________________________________________________________
// Day 2 How to accept user input

// EASY WAY WITH A WINDOW PROMPT
/*let username = window.prompt("What is your name?");
console.log(username);*/


//DIFFICULT WAY "THE HTML TEXTBOX"
/*let username;

document.getElementById("myButton").onclick=function(){

    username = document.getElementById("myText").value;
    console.log(username);

    document.getElementById("myLable").innerHTML = username;
}
*/

// ////////// HTML ///////////

// Q :- Difference between DIV & SPAN    

// answer:  div is block-level element while span is inline-element.

// Q :- Are the HTML tags and elements the same thing?
// Ans:- no, because HTML tags are basically opening and closing tag, on the other side element is a section of content stored in any opening and closing tags

// Q :- What are attributes in HTML?
// answer: HTML attributes are additional values that configure or adjust the behavior of HTML elements:
//  Purpose
// Attributes are used to change the display or behavior of HTML elements, such as their color, size, or functionality




// Q :- What are void/empty elements in HTML? 
// answer:- In HTML, void or empty elements are elements that don't have content and don't require a closing tag:
// Ex:- <br>, <img><hr>

// What are HTML entities?
// <	&lt;   =>    less than
// > 	&gt;  =>    Greator than
// &	&amp;  =>     Ampersand
// (non-breaking space) &nbsp;


// Different types of lists in HTML.  => order and unorder list.  

// What is class in HTML  => In HTML, class is an attribute which give a specific name to element.

// Difference between class and ID  => class can be repeated and id is unique in nature.

// What are semantic elements =>  
// 	Ans :- semantic tags in HTML are elements that clearly decrine thier meaning,  providing structure and context to web content		

// What are meta tags?
//  Ans  :-  Meta Tags are that provide meta data about web page such as title, discription and keywords which are use by search engine and browser to understand the content and context the web page

// Can we display a web page inside a web page?
// Anss :- Yes, you can display a web page inside another web page using <iFrame> (inline frame) element.

// Is it possible to change an inline element to block element and vice versa?
// Ans :- Yes element behavior can be modify using display property in css.

// What is the target attribute in HTML?
// Ans :- HTML target attribute typicaly used within <a> tags. specifies where linked document should be open when clicked.

// In how many ways can we specify the CSS styles for the HTML element?
// Ans :- we can specify the css style in three ways in html element.

// What are some of the advantages of HTML5 over its previous versions?
// Ans:- HTML5 provied native audio and video support.

// How can we include audio or video in a webpage?
// Ans :- By using <audio> and <video> tags

// What type of audio files can be played using HTML5?
// And:-
// Mp3
// WAV
// Ogg

// Tell me about background property in CSS.
// Ans :- the backgrouund shorthand css property sets all
//  background properties at once such as color, size, image and repeat mathod

// Difference between localStorage & sessionStorage.
// Ans :- localStorage keeps data until manually cleared and localStorage is temporary and cleared when browser session end.

// What are the various input types in HTML form?
// <input type="button">
// <input type="checkbox">
// <input type="color">
// <input type="date">
// <input type="datetime-local">
// <input type="email">
// <input type="file">
// <input type="hidden">


// ////////// CSS //////////


// what is inheritance in css?
// Ans :- In css inheritance controls what happens when no value specifed for a property on an element

// Explain how inheritance works in CSS?

// What is CSS specificity?

// What does RGB stand for in CSS?
// Ans:- The CSS RGB () function specifes a color using red-green-blue model. An optional alpha component can also be added(represent the tranparency of color)

// What is the A in RGBA?
// Ans :- In RGBA A stands for alpha which specifies the transparancy of color.

// What are HEX values in CSS?
// Ans:- The most common way to specify colors in css is use thier hexadecimal values, HEX numbers can be 0-9 and A-F.

// What are EM & REM units in CSS?

// What are viewport units in CSS?

// How is the calc function used in CSS?

// What does the min-height property do in CSS?

// What does the max-height property do in CSS?

// What is a font stack, and what are generic fonts in CSS?

// What are font-weight and font-style in CSS?

// How is the text-indent property used in CSS?

// What are other text properties available in CSS?

// Explain the CSS Box Model.

// How to float an image around some text.

// What is the default value of box-sizing property?

// Different values of position property in CSS

// Different values of display property in CSS

// Difference between display: none & visibility: hidden

// What is universal selector in CSS?

// Difference between (space) and (>) selectors in CSS?

// Difference between (+) and (~) selectors in CSS?

// Difference between inline, block and inline-block in CSS?

// What are pseudo classes?

// Does margin-top or margin-bottom have an effect on inline elements?

// What is z-index?

// Difference between justify-content & align-items in CSS?

// Explain flex-wrap property in CSS

// What does !important mean in CSS?







// //////////	JAVASCRIPT //////////



// Is Javascript a statically typed or a dynamically typed language?
// Ans:- JS is dynamically typed language.

// What is the difference between client-side and server-side Javascript?
// Ans:- clint-side javascript runs in user's browser.while server-side Javascript executes on the server.

// What is recursion in a programming language? Explain with example.
// Ans:- In programme recursion is a technique where function call itself to solve a problem..
// Ex:- 

//  function factorial(n){
//       // Base case: factorial of 0 or 1 is 1
//     if(n <=1){
//         return 1
//     }
//       // Recursive case: n! = n * (n-1)!
//     return n * factorial(n-1);
//  }

// console.log(factorial(5)); //output - 120

// What are the different data types present in Javascript?
// JavaScript has 8 primary data types categorized into two types;
// ex - 1. Primitive Data Type :- Number, string, null, undefined, Boolean, Symbol, BigInt
//  2. Non-Primitive Type - Object, Array, Function.

// Explain Hoisting in Javascript.
// In JavaScript, a variable can be declared after it has been used.
// in other words a variable can be used before it has been declared. 

// Difference between var, let & const keywords in Javascript.
// In javaScript var,let and const are keywords used for declaring variables. var is a function-scoped and can be reassign and redeclare in other hand let and const are block-scoped. and let can we reassign but can not be redeclared and const cant not be reassign or redeclare.

// Difference between “ == “ and “ === “ operators.
// In JavaScript, equality oprators are used to compare values. However, ==(double equal) and === (triple equal) behave diffrently.
// ==(Loose Equality): Converts the values to same data type before comparing.
// ===(Strict Equality): Compares the both value and data type, without converting types.

// What do you understand by DOM?
// Ans:- DOM Stands for Document Object Model is a programming interface that represents the structure of web page in a way that programming language like javascript can unduerstand and manuplate.

// What do you understand by virtual DOM?
// Ans :- The Vertual DOM (VDOM) is assentially a javascript object the mirros the sturcture of acutal DOM but exists in Memory

// Explain scope in programming languages.
// Ans :- In Programming, scope refers to the region of a programe where a variable or function is visible and accesible, determinig where it can be used and how long its value persits during excution.

// Explain “this” keyword with example.
// Ans :- This refers to the Object that is excuting the currunt function.
// the value of the is depend on how and where the function is called
//Ex :-
// let person = {
//   name: "Ranveer",
//   greet: function () {
//     console.log(this.name)
//   }
// }
// person.greet() //output = Ranveer

// Explain Higher Order Functions in Javascript.
// A higher order function is function that takes one or two functions as arguments, or return a function as its result.
//Ex :-
// function callBackFunction() {
//   console.log("I am call back function")
// }

// function higherOrderFunction(func) {
//   console.log("i am higher order funtion")
//   func()
// }

// higherOrderFunction(callBackFunction)

// What are callbacks? Explain with example.
//Ans :- A callback function is a function that is paased to another function as an argument and excuted later.
//Ex :- 
// function greet(name, callback) {
//   console.log("Hello " + name)
//   callback()
// }

// function saybye() {
//   console.log("Goodbye")
// }
// greet("Ranveer" , saybye)

// What is currying in Javascript?
//Ans :- Curring is used in javascript to break down complex functions calls into smaller, more manageable steps. it transform a funtion with multiple argument into a series of function, each taking a single argument.
// Ex:- Normal Function 
// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 5))

//Ex :- function Curring :- 
// function add(a) {
//   return function (b) {
//     return a + b;
//   }
// }
// const addTwo = add(5); // first function call with 5
// console.log(addTwo(4)) // output - 9


// Explain Closures in Javascript.

// What are anonymous functions? 

// What are arrow functions?

// Is there any difference in arrow & anonymous functions in Javascript?

// What are rest and spread operators?

// Explain Asynchronous programming with example.

// What are promises in Javascript? Explain with example.

// What are the various states of promises?

// What are the advantages of using promises over callbacks?

// What is Object Destructuring?

// Difference between setInteval & setTimeout?

// Explain event loop & execution context in Javascript?

// Explain OOP?

// What are constructors?

// What is super constructor in Javascript?

// How are arrays different from Set in Javascript? (uniqueness, methods, ordering)

// Does Set has methods push & pop?

// Difference between flat & flatMap in JS.

// What is the difference between Object.seal & Object.freeze?

// Explain modularization in Javascript (import & export).


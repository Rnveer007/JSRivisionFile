// // function f1(n1, n2, valueToAdd, func) {
// //     for (let i = 1; i <= n2; i++) {
// //         n1 += func(n1, valueToAdd);
// //     }
// //     return n1;
// // }


// Call back function :-

// Definition: A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.

// Example:-

// function fetchData(displayData){
//     console.log('Data fetched');
//     setTimeout(() => {
//         displayData();
//     }, 2000);
// }

// function displayData(){
//     console.log('Data displayed');
// }

// fetchData(displayData);


// // Example 2:-

// function fetechData(name, callback){
// console.log('Hello ' + name);
// callback();
// }

// function displayData(){
// console.log('Good Morning');
// }

// fetechData('Ranveer', displayData);

// example 3:-
// function calculate(a,b,add){
//     return add(a,b);
// }

// function add(a,b){
//     return a+b;
// }

// console.log(calculate(5,3,add));


// None Call back function :-
// Definition: A function that is not passed as an argument to another function.
// Example:-

// function fetchData(){
//     console.log('Data fetched');  
// }

// function displayData(){
//     console.log('Data displayed');
// }

// fetchData();
// displayData();




// JavaScript String methods:-
// definition: JavaScript string methods are used to work with strings. these methods are used to perform operations on strings.


// Find length of string:-
// example:-

// let word = 'Ranveer';
// console.log(word.length);

// toUpperCase(): Converts all letters to uppercase.
// toLowerCase(): Converts all letters to lowercase.

// example:-
// let word1 = 'Ranveer';
// console.log(word1.toUpperCase());
// console.log(word1.toLowerCase());

// Q4: How do you remove spaces from a string?
// Answer: trim() method is used to remove spaces from a string.
// example:-
// let word2 = '" Ranveer Singh "';
// document.write(word2.trim());
// console.log(word2.trim());
// console.log(word2.trimStart());

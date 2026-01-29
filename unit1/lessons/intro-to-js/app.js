console.log('it is working')//it'll log a message into the console
let studentName ="Ali";
console.log(studentName)
const teacherName="Omar";
console.log(teacherName)

studentName = "Hassan"; //updating the value to Hassan
console.log(studentName)
//teacherName ="Samar";
// it'll give me an error bec you can't change the const value

//shift + inter + a  to create a multy lines comment


/**
 * common data type in js:
 * 1. String
 * 2. Double
 * 3. Boolean
 * 4. undefined
 * 5. null
 * 6. Array
 * 7. Opjects
 */


let myFavoritNumber = 15;
let isLoggedIn = true;
console.log(myFavoritNumber)
console.log(typeof myFavoritNumber)
let firstName = "Yusuf";
let country ="Bahrain";
console.log('Hello my name is ' + firstName + ' and I am from '+country)

//another way to do it (next to num 1 in the keybord)


console.log(`Hello my name is ${firstName} and I am from ${country}`)

/*
// Exercise 1:
// declare 3 variables for myName, city, and favoriteHobby
// console.log("I am [name], I am from [city], and [favoriteHobby] is my favorite hobby")
*/
let myName = "Masooma";
let city = "Bahrain";
let favoriteHobby = "swimming";
console.log(`I am ${myName}, I am from ${city}, and ${favoriteHobby} is my favorite hobby`)

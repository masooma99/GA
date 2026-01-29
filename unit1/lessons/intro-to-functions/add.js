console.log("Function Lessons")



// Parts when working with functions
//1. Declaring Function
//(static function)
function GreetAli(){
    console.log("=================")
    console.log("Good Morning Ali")
    console.log("=================")
}

//2. calling the Function
GreetAli()
GreetAli()

//this is a dynamic function
function greet(student){
    console.log(`Good Morning ${student}`)
}
let studentName = "Masooma";
greet(studentName)
greet('Masooma Ebrahim')


//Exercise#1:
function addTowNumbers(num1,num2){//parameters
    let total=num1+num2;
    console.log(num1 +" + "+num2+" = "+total)
    return total;
}

addTowNumbers(2,4)//(2,4)arguments

const resulte = addTowNumbers(3,4);
console.log(resulte)
//at first the function did not return anything 
//so resulte value was undefined

//Exercise#2:
function numberSquared(number){
    return number*number;
}
let squareResalts = numberSquared(4);
console.log(squareResalts)

//function expression
const numberSquared2 = function(num1){
    return num1*num1;
}

const numberSquared3= (num1) => {
    return num1 * num1;
}
//if you only have one parameter you don't need to add ()
const numberSquared4= num1 => {
    return num1 * num1;
}

//for a faster result 
const numberSquared5= num1 => num1 * num1;

console.log(numberSquared5(5))
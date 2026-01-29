console.log("Array Lesson")

//create an array
const students=['Ali', 'sarah', 'Hasan'];


console.log(students)
console.log(students.length)

console.log('AbeEr')
console.log('AbeEr'.toLowerCase())

//remove the last value from the array
students.pop()
console.log(students)

//add a value to the end of the array
students.push('Masooma')
console.log(students)

//shift() remove from the beggening
students.shift();
console.log(students)

//unshift() adds an element into the beggening of the array
students.unshift('Ahmed');
console.log(students)


//splice(from what index you want to remove, how many elements you want to remove)
students.splice(1,1)//only remove sarah "index 1"
console.log(students)

students.splice(0,2,'Ali','sam','lora')
console.log(students)


//if I don't want to remove any element just want to add elements to the array in a specific index
students.splice(1,0,'Ali','sam','lora')
console.log(students)

console.log('------------------------------');


for(let i=0;i<=students.length;i++){
    console.log(students[i]);
}
console.log('------------------------------');


students.forEach(student => console.log(student))//it did work

console.log('------------------------------');

console.log('Welcome to our ')



//this one did not work
for(let student of students){
    console.log(student)
}
let numbers = [1, 2, 3]
numbers.forEach((number) => {
  console.log(number)
})
//////////////////  .map  ////////////////////////////
let numbers2 = [1, 3, 5, 7, 7]
const newArray = numbers2.map((number) => {
  return number + 10
})

console.log(newArray)

let numbers3 = [1, 3, 5, 7, 7]

const filteredNumbers = numbers3.filter((number, index) => {
  console.log(index)
  return number > 5
})

console.log(filteredNumbers)

//--------------------------------------------------------------

const words = ["hi", "my", "name", "is", "Masooma"]

const wordWithM = words.filter((word) => {
  return word[0] === "m" || word[word.length - 1] === "e"
})

console.log(wordWithM)

let numbers4 = [1, 2, 3, 5, 7, 7, 10]
let startingNum = 10
const sum = numbers4.reduce(
  (accumulator, value) => {
    if (value % 2 === 0) {
      return accumulator + value
    } else {
      // must have an else bec if not it'll not return anything
      return accumulator
    }
  },
  0 // the number you want to start at
)

console.log(sum)

const greater = numbers4.some((number) => {
  return number > 7
})

console.log(greater)

const mappedAndFilteredNumbers = numbers4
  .map((number) => {
    return number + 15
  }) //the returned value from map will be going though filter not the origonal array
  .filter((number) => {
    return number % 2 === 0
  })

console.log(mappedAndFilteredNumbers)

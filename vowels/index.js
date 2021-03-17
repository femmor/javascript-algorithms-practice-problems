// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 3
function vowels(str) {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

module.exports = vowels;


// Solution 1
// function vowels(str) {
//   let count = 0
//   const vowels = 'aeiou' 
//   const newStr = str.toLowerCase()

//   for(let char of newStr){
//     for(let i = 0; i < vowels.length; i++) {
//       char === vowels[i] ? count += 1 : null
//     }
//   }

//   return count
// }



// Solution 2
// function vowels(str) {
//   let count = 0
//   const checker = ['a', 'e', 'i', 'o', 'u']
//   const newStr = str.toLowerCase()

//   for(let char of newStr){
//     checker.includes(char) ? count++ : null
//   }

//   return count
// }
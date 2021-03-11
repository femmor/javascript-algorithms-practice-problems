// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution 1
function capitalize(str) {
  const newStr = str.split(" ")
  let words = []

  newStr.forEach(word => {
    const cappedFirst = word[0].toUpperCase()
    const cappedWord = cappedFirst + word.slice(1)
    words.push(cappedWord)
  })
  return words.join(" ")
}

module.exports = capitalize;


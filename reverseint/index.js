// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // convert n toString
    const numberString = n.toString()
    // reverse numberString
    const reversedString = numberString.split("").reverse().join("");
    // check if there is a -/+ sign before reversedString
    // use Math.sign and parse in n
    return parseInt(reversedString) * Math.sign(n)
}

module.exports = reverseInt;

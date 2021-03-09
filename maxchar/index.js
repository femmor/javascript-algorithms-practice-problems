// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // set empty object to take in characters
    const charMap = {}
    // initial maximum occurrence of character
    let max = 0
    // character with the maximum occurrence
    let maxChar = ""

    // iterate through str and add to charMap the object/key values of most occurring characters
    for (let char of str) {
        // if character count occurs
        if(charMap[char]) {
            // increment
            charMap[char]++
        } else {
            // else set character occurrence = 1
            charMap[char] = 1
        }
    }

    // iterate through charMap and return the char with most occurrence
    for (let char in charMap) {
        // check if character occurrence is greater than max
        if (charMap[char] > max) {
            // set max = that number of occurrence
            max = charMap[char]
            // set maxChar = the character with most occurrence
            maxChar = char
        }
    }

    // return maxChar
    return maxChar
}

module.exports = maxChar;

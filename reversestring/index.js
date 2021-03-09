// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Solution 3
    // Using the reduce helper method
    // convert the given str into an array, use the reduce helper method
    // return the result

    const newStr = str.split("").reduce((rev, char) => char + rev, '')
    return newStr
}

reverse("asdf");

module.exports = reverse;


// // Solution 1
    // const newStr = str.split("").reverse().join("")
    // return newStr


// // Solution 2 - Seems to take longer
    // For Loop
    // const newStr = str.split("")
    // const reversedStr = []
    // for (let i = 0; i < newStr.length; i++) {
    //     const char = newStr[i]
    //     reversedStr.unshift(char)
    // }

    // return reversedStr.join("")
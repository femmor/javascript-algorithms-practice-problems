// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const newStr = str.split("").reduce((rev, char) => char + rev, '')
    return newStr
}

reverse("asdf");

module.exports = reverse;


// Solution 1
    // return str.split("").reverse().join("")

    // Solution 2
    // const newStr = str.split("")
    // const reversedStr = []

    // for(let i = 0; i < newStr.length; i++){
    //   let char = newStr[i]
    //   reversedStr.unshift(char)
    // }
    // return reversedStr.join("")


    // Solution 3
    // const newStr = str.split("").reduce((rev, char) => char + rev, '')
    // return newStr
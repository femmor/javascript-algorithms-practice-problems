// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // // Solution 1
    // // convert the given str to an array
    // // use the reverse helper method to reverse the array
    // // join the array back into a str with the join method
    // return str.split("").reverse().join("");


    // // Solution 2 - Seems to take longer
    // // Using forOf loop
    // // create a new empty string
    // let reversed = ""
    // // for each char in the the given str, add the char to the empty reversed string
    // for (const char of str) {
    //     reversed = char + reversed
    // }
    // // return the reversed string
    // return reversed


    // Solution 3
    // Using the reduce helper method
    // convert the given str into an array, use the reduce helper method
    // return the result
    return str.split("").reduce((rev, char) => char + rev, "");

}

reverse("asdf");

module.exports = reverse;

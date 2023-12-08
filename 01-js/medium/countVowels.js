/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let stringLowerCase = str.toLowerCase();

    let count = 0;
    for (let i = 0; i < stringLowerCase.length; i++) {
      if ((stringLowerCase[i] === "a") || (stringLowerCase[i] === "e") || (stringLowerCase[i] === "o") || (stringLowerCase[i] === "i") || (stringLowerCase[i] === "u")) {
        count++
      }
    }

    return count;
}

console.log(countVowels("EaSiEr"))

module.exports = countVowels;
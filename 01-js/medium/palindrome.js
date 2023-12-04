/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strLowerCase = str.toLowerCase();

  let strLowerCaseSpaceRemoved = ""

  for (let i = 0; i < strLowerCase.length; i++) {
    if(/[\w]/.test(strLowerCase[i])) {
     let temp = strLowerCaseSpaceRemoved.concat(strLowerCase[i]);
     strLowerCaseSpaceRemoved = temp;
    }
  }
  


  let j = strLowerCaseSpaceRemoved.length-1
  for (let i = 0; i < strLowerCaseSpaceRemoved.length/2; i++,j--) {
    console.log(strLowerCaseSpaceRemoved[i], strLowerCaseSpaceRemoved[j])
    if (strLowerCaseSpaceRemoved[i] !== strLowerCaseSpaceRemoved[j]) {
      return false;
    }
  }

  return true;
}


module.exports = isPalindrome;

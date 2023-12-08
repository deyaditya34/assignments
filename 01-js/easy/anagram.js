/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1LowerCase = str1.toLowerCase();
  let str2LowerCase = str2.toLowerCase();

  for (let i = 0; i < str1LowerCase.length; i++) {
  let found = false;
    for (let j = 0; j < str2LowerCase.length; j++) {
      if (str1LowerCase[i] === str2LowerCase[j]) {
        found = true;
      }
    }
    if (found === false) {
      return false;
    }
  }

  for (let i = 0; i < str2LowerCase.length; i++) {
  found = false;
    for (let j = 0; j < str1LowerCase.length; j++) {
      if (str2LowerCase[i] === str1LowerCase[j]) {
        found = true;
      }
    }
    if (found === false) {
      return found;
    }
  }
  
  return found;

}

module.exports = isAnagram;

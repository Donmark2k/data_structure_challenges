/*
Length of Last Word
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.
Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/

const lastWord =  function(s) {
    // Trim the string to remove leading and trailing spaces
    const trimmedString = s.trim();
    console.log(trimmedString)

  
    // Split the string into an array of words using spaces as the delimiter
    const wordsArray = trimmedString.split(' ');
    console.log(wordsArray)
  
    // Get the last word from the array
    const lWord = wordsArray[wordsArray.length - 1];
    console.log(lWord)

  
    // Return the length of the last word
    return lWord.length;
  };
  

// Test cases
const s1 = "Hello World";
const s2 = "   fly me   to   the moon  ";
const s3 = "luffy is still joyboy";

console.log(lastWord(s1)); // Output: 5
console.log(lastWord(s2)); // Output: 4
console.log(lastWord(s3)); // Output: 6
/*
Excel Sheet Column Title
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnNumber = 1
Output: "A"
Example 2:

Input: columnNumber = 28
Output: "AB"
Example 3:

Input: columnNumber = 701
Output: "ZY"
*/
const convertToTitle = function(columnNumber) {
    let result = '';

    while (columnNumber > 0) {
        // Convert the number to a character code
        let charCode = (columnNumber - 1) % 26 + 65;
        console.log(charCode)

        // Convert the character code to the corresponding character
        let char = String.fromCharCode(charCode);
        console.log(char)


        // Add the character to the result
        result = char + result;
        console.log(result)


        // Update the columnNumber to move to the next position
        columnNumber = Math.floor((columnNumber - 1) / 26);
        console.log(columnNumber)

    }

    return result;
};

// console.log(convertToTitle(1)); // Output: "A"
console.log(convertToTitle(28)); // Output: "AB"
// console.log(convertToTitle(701)); // Output: "ZY"


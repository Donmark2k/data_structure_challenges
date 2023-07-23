/*
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
*/
//    const decimalA = parseInt(a,2) it convert the inputted binary number to decimal
// 2 represent the binary number
// return sum.toString(2), it convert the decimal to binary first before to string

const addBinary = function(a,b){
    const decimalA = parseInt(a,2)
    const decimalB = parseInt(b,2)
    console.log(decimalA, decimalB)
    const sum = decimalA + decimalB
    return sum.toString(2)

}
console.log(addBinary("11", "1")); // Output: "100"
console.log(addBinary("1010", "1011"));// Output: "10101"
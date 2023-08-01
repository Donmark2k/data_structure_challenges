/*
Power of Four
Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.
Example 1:
Input: n = 16
Output: true

Example 2:
Input: n = 5
Output: false
Example 3:
Input: n = 1
Output: true
*/

const isPowerOfFour = function(n) {

    for(let i = 0; i<= n; i++){
        if (n===Math.pow(4,i)) {
            return true
        }

    }
  return false    
};

console.log(isPowerOfFour(16))
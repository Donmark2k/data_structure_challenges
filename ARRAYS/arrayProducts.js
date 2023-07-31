/*
Array of Array Products
Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

Solve without using division and analyze your solution’s time and space complexities.

Examples:

input:  arr = [8, 10, 2]
output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

input:  arr = [2, 7, 3, 4]
output: [84, 24, 56, 42]  
*/

function arrayOfArrayProducts(arr) {
    const n = arr.length;
    if (n <= 1) {
        return [];
      }
    const result = [];
  
    for (let i = 0; i < n; i++) {
      let product = 1;
      for (let j = 0; j < n; j++) {
        if (i !== j) {
          product *= arr[j];
        }
      }
      result.push(product);
    }
  
    return result;
  }
  
  // Test cases
  console.log(arrayOfArrayProducts([8, 10, 2])); // Output: [20, 16, 80]
  console.log(arrayOfArrayProducts([2, 7, 3, 4])); // Output: [84, 24, 56, 42]
  
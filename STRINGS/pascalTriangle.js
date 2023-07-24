/*
Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
*/

const generate = function(numRows) {
    if (numRows <= 0) return [];
  
    const result = [[1]];
  
    for (let i = 1; i < numRows; i++) {
      const prevRow = result[i - 1];
      console.log(prevRow)
      const newRow = [1];
  
      for (let j = 1; j < i; j++) {
        newRow.push(prevRow[j - 1] + prevRow[j]);
      }
  
      newRow.push(1);
      result.push(newRow);
    }
  
    return result;
  };
  console.log(generate(5)); // Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // Output: [[1]]

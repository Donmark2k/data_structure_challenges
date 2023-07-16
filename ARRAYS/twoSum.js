// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// The first loop point to the first element in the array
// The second loop point to the second element in the array
// The if condition sum the two adjacent element from left to right



const twoSum = function(nums, target) {

for (let i =0; i< nums.length-1; i++) {
    for (let j = i +1; j< nums.length; j ++) {
        if (nums[i] + nums[j] === target) {
            return [i,j]
        }
    }
}
return 'Not applicable'
}

const nums = [2,7,11,15]
const findNumber = twoSum (nums, 88)
console.log (findNumber)

const nums1 = [3,2,4]
const findNumber1 = twoSum (nums1, 7)
console.log (findNumber1)

